import os
import psycopg2
import datetime
import json

datafolder = os.path.join(os.path.dirname(os.path.dirname(__file__)),'web','src','sections','Model','data')

if not os.path.exists(datafolder):
	os.makedirs(datafolder)


def gen_js(realdata,modeldata,max_x=None,max_y=None,min_x=None,min_y=None,):
	if max_x is None:
		max_x = max([r['lat'] for r in realdata+modeldata if r['lat'] is not None])
	if min_x is None:
		min_x = min([r['lat'] for r in realdata+modeldata if r['lat'] is not None])
	if max_y is None:
		max_y = max([r['long'] for r in realdata+modeldata if r['long'] is not None])
	if min_y is None:
		min_y = min([r['long'] for r in realdata+modeldata if r['long'] is not None])

	return f'''
	import L from "leaflet";

/***************
 * MAP RELATED *
 ***************/
export const realMapData = {json.dumps(realdata)};

export const modelMapData = {json.dumps(modeldata)};

const mapCorner1 = L.latLng({min_x}, {min_y});
const mapCorner2 = L.latLng({max_x}, {max_y});
export const mapBoundaries = L.latLngBounds(mapCorner1, mapCorner2);

/**********************
 * LINE CHART RELATED *
 **********************/

export const lineChartData = {json.dumps([])};'''


def get_data(query):
	with psycopg2.connect(user='wschuell',host='195.154.70.113',dbname='for_rest',port=64741) as con:
		cur = con.cursor()
		cur.execute(query)
		return [dict(lat=lat,long=lon,r=r) for lat,lon,r in cur.fetchall()]

def get_data_osm(table_name):
	return get_data(query=f'''SELECT st_y(geometry) as lat,st_x(geometry) as long, coalesce(circumference::real/6.28,0.) as r from {table_name};''')

def get_data_sim(table_name):
	return get_data(query=f'''SELECT st_y(geometry) as lat,st_x(geometry) as long, r from {table_name}
			where t=(SELECT MAX(t) from {table_name});''')

def get_data_alaska(table_name='alaska'):
	return get_data(query=f'''SELECT st_y(geometry) as lat,st_x(geometry) as long, "DBH.cm"/100. as r from {table_name}
			;''')


def get_data_panama(table_name='panama',t=datetime.datetime.now()):
	if table_name=='panama_full':
		prefix = 'Exact'
	else:
		prefix = ''
	return get_data(query=f'''
		WITH prequery AS (SELECT MAX("Status") AS status,avg(st_y(geometry)) as lat,avg(st_x(geometry)) as long, max("DBH")/1000. as r from {table_name}
			WHERE "{prefix}Date"<='{t.strftime('%Y-%m-%d')}'
			GROUP BY "StemID"
			)
		SELECT lat,long,r FROM prequery
			WHERE status='alive'
			;''')


# print(get_data_panama(table_name='panama_full',t=datetime.datetime(1990,1,1)))

# with open(os.path.join(datafolder,'test.js'),'w') as f:
# 	s = gen_js(realdata=get_data_osm('trees_tuerkenschanzpark'),modeldata=get_data_osm('trees_tuerkenschanzpark'))
# 	print(s)
# 	f.write(
# 		s)

d_list = [
	# dict(name='panama',
	# 	pretty_name='Barro Colorado Island, Panama',
	# 	table_real='panama',
	# 	gen_func_real=get_data_panama,
	# 	table_model='panama',
	# 	gen_func_model=get_data_panama,
	# 	),
	# dict(name='turkenschanzpark',
	# 	pretty_name='Türkenschanzpark, Vienna, Austria',
	# 	table_real='panama',
	# 	gen_func_real=get_data_panama,
	# 	table_model='panama',
	# 	gen_func_model=get_data_panama,
	# 	),
	dict(name='josefstadt',
		pretty_name='Josefstadt, Vienna, Austria',
		table_real='trees_josefstadt',
		gen_func_real=get_data_osm,
		table_model='sim_results_test',
		gen_func_model=get_data_sim,
		),
]

extra_js = ''
for d in d_list:
	name = d['name']
	s = gen_js(realdata=d['gen_func_real'](d['table_real']),modeldata=d['gen_func_model'](d['table_model']))
	if not os.path.exists(os.path.join(datafolder,name)):
		os.makedirs(os.path.join(datafolder,name))
	with open(os.path.join(datafolder,f'{name}/mapData.js'),'w') as f:
		f.write(s)
	extra_js += f'''
import {{ {name}modelMapData, {name}realMapData }} from "./data/{name}/mapData";

const {name}MapState = {{
  name: "{d['pretty_name']}",
  realData: {name}realMapData,
  modelData: {name}modelMapData,
}};
	'''

with open(os.path.join(datafolder,f'listing.js'),'w') as f:
	f.write(extra_js)