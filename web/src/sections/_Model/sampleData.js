import L from "leaflet";

/***************
 * MAP RELATED *
 ***************/
export const realMapData = [
  {
    lat: 0,
    long: 0,
    r: 0,
  },
  {
    lat: 0,
    long: 0,
    r: 0,
  },
  {
    lat: 0,
    long: 0,
    r: 0,
  },
];

export const modelMapData = [
  {
    lat: 0,
    long: 0,
    r: 0,
  },
  {
    lat: 0,
    long: 0,
    r: 0,
  },
  {
    lat: 0,
    long: 0,
    r: 0,
  },
];

const mapCorner1 = L.latLng(40.712, -74.227);
const mapCorner2 = L.latLng(40.774, -74.125);
export const mapBoundaries = L.latLngBounds(mapCorner1, mapCorner2);

/**********************
 * LINE CHART RELATED *
 **********************/

export const lineChartData = [
  {
    time: 96,
    value: 0.6827840632552957,
  },
  {
    time: 97,
    value: 1.083852140278578,
  },
  {
    time: 98,
    value: 1.4202480846149885,
  },
  {
    time: 99,
    value: 1.4202480846149885,
  },
  {
    time: 100,
    value: 1.4202480846149885,
  },
];
