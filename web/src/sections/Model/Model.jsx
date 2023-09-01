import SectionWrapper from "../../components/SectionWrapper";
import Map from "./Map";
import { useState } from "react";
import ForestLineChart from "../../components/LineChart";
import { HTMLSelect } from "@blueprintjs/core";
import {
  // panamaMapState,
  // turkenschanzparkMapState,
  josefstadtMapState,
  alaskaMapState,
} from "./listing";

// const vienatMapState = {
//   center: [48.235, 16.3338],
//   realData: realMapData,
//   modelData: modelMapData,
// };

function Model() {
  const [mapState, setMapState] = useState(josefstadtMapState);
  const SELECT_OPTIONS = ["josefstadt", "alaska"];

  const handleSelectChange = (value) => {
    if (value === "josefstadt") {
      setMapState(josefstadtMapState);
    }
    if (value === "alaska") {
      setMapState(alaskaMapState);
    }
  };

  console.log({ mapState });

  return (
    <SectionWrapper sectionId="hero-banner">
      <div className=" bg-slate-100 min-h-full">
        <div className="container mx-auto px-4 py-10">
          <h2>Model</h2>
          <HTMLSelect
            options={SELECT_OPTIONS}
            onChange={(e) => {
              handleSelectChange(e.target.value);
            }}
          />
          <div className="flex flex-col py-10 md:flex-row gap-10">
            <div className="w-1/2">
              <h3>Realworld data</h3>
              <div className="pt-5">
                <Map
                  center={mapState.center}
                  points={mapState.realData}
                  color="#2f4b7c"
                />
              </div>
            </div>
            <div className="w-1/2">
              <h3>Model data</h3>
              <div className="pt-5">
                <Map
                  center={mapState.center}
                  points={mapState.modelData}
                  color="#ff7c43"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col px-10 md:flex-row">
            <div className="w-1/3">
              <div style={{ height: "350px" }} className="pt-12">
                <ForestLineChart />
              </div>
            </div>
            <div className="w-1/3">
              <div style={{ height: "350px" }} className="pt-12">
                <ForestLineChart />
              </div>
            </div>
            <div className="w-1/3">
              <div style={{ height: "350px" }} className="pt-12">
                <ForestLineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Model;
