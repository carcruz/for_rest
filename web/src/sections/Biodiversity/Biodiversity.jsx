import SectionWrapper from "../../components/SectionWrapper";
import CirclePackingViz from "./CirclePackViz";
import { startData, endData } from "./sampleData";

function Biodiversity() {
  return (
    <SectionWrapper sectionId="biodiversity">
      <div className=" bg-slate-200 w-full h-full">
        <div className="container mx-auto px-4 py-10">
          <h2>Biodiversity</h2>
          <div className="flex flex-col p-10 md:flex-row">
            <div className="w-1/2">
              <h3></h3>
              <div style={{ height: "450px" }} className="pt-12">
                hi
              </div>
            </div>
            <div className="w-1/2">
              <h3></h3>
              <div className="flex">
                <div
                  style={{ height: "350px", width: "100%" }}
                  className="pt-12"
                >
                  <CirclePackingViz data={startData} />
                </div>
                <div
                  style={{ height: "350px", width: "100%" }}
                  className="pt-12"
                >
                  <CirclePackingViz data={endData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Biodiversity;
