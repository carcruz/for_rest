import SectionWrapper from "../../components/SectionWrapper";
import ModelControlls from "./ModelControlls";
import ModelViz from "./ModelViz";
import Map from "./Map";
import { useState } from "react";
import { modelMapData, realMapData } from "./data/panama/mapData";

const vienatMapState = {
  center: [48.235, 16.3338],
  realData: realMapData,
  modelData: modelMapData,
};

function Model() {
  const [mapState, setMapState] = useState(vienatMapState);

  return (
    <SectionWrapper sectionId="hero-banner">
      <div className=" bg-slate-100 w-full">
        <div className="container mx-auto px-4 py-10">
          <h2>Model</h2>
          <div className="flex flex-col py-10 md:flex-row gap-10">
            <div className="w-1/2">
              <h3></h3>
              <div style={{ height: "450px" }} className="pt-12">
                <Map
                  center={mapState.center}
                  points={mapState.realData}
                  color="#2f4b7c"
                />
              </div>
            </div>
            <div className="w-1/2">
              <h3></h3>
              <div style={{ height: "450px" }} className="pt-12">
                <Map
                  center={mapState.center}
                  points={mapState.modelData}
                  color="#ff7c43"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col p-10 md:flex-row">
            <div className="w-1/3">
              <h3></h3>
              <div style={{ height: "450px" }} className="pt-12">
                <ModelViz />
              </div>
            </div>
            <div className="w-1/3">
              <h3>Model controlls</h3>
              <div style={{ height: "450px" }} className="pt-12">
                <ModelControlls />
              </div>
            </div>
            <div className="w-1/3">
              <h3>Model controlls</h3>
              <div style={{ height: "450px" }} className="pt-12">
                <ModelControlls />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Model;
