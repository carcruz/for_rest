import { MapContainer, TileLayer, Circle } from "react-leaflet";
import { v1 } from "uuid";
import * as d3 from "d3";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const rScale = d3.scaleLinear().domain([0, 1]).range([2, 40]);

const fillStyleeOptions = (color) => ({
  fillColor: color,
  fillOpacity: 0.3,
});

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);
  return null;
};

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
        <RecenterAutomatically lat={center[0]} lng={center[1]} />
      </MapContainer>
    </div>
  );
}
export default Map;
