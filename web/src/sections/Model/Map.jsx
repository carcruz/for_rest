import { MapContainer, TileLayer, Circle } from "react-leaflet";
import { v1 } from "uuid";
import * as d3 from "d3";

const rScale = d3.scaleLinear().domain([0, 1]).range([2, 10]);

const fillStyleeOptions = (color) => ({
  fillColor: color,
  fillOpacity: 0.3,
});

function Map({ center, points = [], color }) {
  return (
    <div style={{ height: "300px", width: "300px%" }}>
      <MapContainer center={center} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
        />
        {points.map((point) => (
          <Circle
            stroke={false}
            key={v1()}
            pathOptions={fillStyleeOptions(color)}
            radius={rScale(point.r)}
            center={[point.lat, point.long]}
          />
        ))}
      </MapContainer>
    </div>
  );
}
export default Map;
