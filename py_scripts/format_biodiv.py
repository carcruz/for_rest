import os
import psycopg2
import datetime
import json

datafolder = os.path.join(os.path.dirname(os.path.dirname(__file__)),'web','sections','Biodiversity')

if not os.path.exists(datafolder):
	os.makedirs(datafolder)


def gen_js(start_data,end_data,color1="rgb(226 232 240);",color2="rgb(226 232 240);",color0="rgb(226 232 240);"):

	return f'''export const startData = {{
			  		{process_data(start_data,color1=color1,color2=color2,color0=color0,name='Biodiversity start')}
	}}; 
export const endData = {{
			  		{process_data(end_data,color1=color1,color2=color2,color0=color0,name='Biodiversity end')}
	}}; 

	'''


def process_data(data,color1,color2,color0,name):
	ans_dict = dict()
	for d in data:
		family,species,loc = d['family'],d['species'],d['value']
		if family not in ans_dict.keys():
			ans_dict[family] = dict(name=family,color=color1,children=[dict(name=species,color=color2,loc=loc)])
		else:
			ans_dict[family]['children'].append(dict(name=species,color=color2,loc=loc))
	ans = f'''name: "{name}", 
					color: "{color0}",
					children: [
					'''
	for family,f_data in ans_dict.items():
		ans += f'''{{name: "{family}", 
					color: "{color1}",
					children: [
					}}
					'''
		for s_data in f_data['children']:
			ans += f'''
						{{
						name: "{s_data['name']}", 
					color: "{color2}",
					loc:{s_data['loc']}
						}}
			'''
		ans += f'''],}}
		'''
	ans += f'''],
'''
	return  ans
	# return json.dumps(list(ans_dict.values()))
'''
name: "nivo",
  color: "{color1}",
  children: [
    {
      name: "viz",
      color: "rgb(71 85 105);",
      loc: 8235,
    },

'''

def get_data(query):
	with psycopg2.connect(user='wschuell',host='195.154.70.113',dbname='for_rest',port=64741) as con:
		cur = con.cursor()
		cur.execute(query)
		return [dict(species=species,family=family,value=value) for family,species,value in cur.fetchall()]

def get_data_osm(table_name):
	return get_data(query=f'''SELECT taxon,taxon,count(*) cnt from {table_name} GROUP BY taxon having taxon is not null order by cnt desc;''')

def get_data_sim(table_name):
	return get_data(query=f'''SELECT st_y(geometry) as lat,st_x(geometry) as long, r from {table_name}
			where t=(SELECT MAX(t) from {table_name});''')

def get_data_alaska(table_name='alaska'):
	return get_data(query=f'''SELECT COUNT(*),"Species" "" from {table_name}
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
	dict(name='turkenschanzpark',
		pretty_name='Türkenschanzpark, Vienna, Austria',
		table_real='trees_tuerkenschanzpark',
		gen_func_real=get_data_osm,
		table_model='trees_tuerkenschanzpark',
		gen_func_model=get_data_osm,
		),
]

extra_js = ''
for d in d_list:
	name = d['name']
	s = gen_js(start_data=d['gen_func_real'](d['table_real']),end_data=d['gen_func_model'](d['table_model']))
	print(s)
	if not os.path.exists(os.path.join(datafolder,name)):
		os.makedirs(os.path.join(datafolder,name))
	with open(os.path.join(datafolder,f'{name}/biodivData.js'),'w') as f:
		f.write(s)