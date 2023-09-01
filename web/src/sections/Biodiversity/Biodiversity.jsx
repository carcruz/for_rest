import SectionWrapper from "../../components/SectionWrapper";
import CirclePackingViz from "./CirclePackViz";
// import { startData, endData } from "./sampleData";
import { startData, endData } from "./panama/biodivData";

function Biodiversity() {
  return (
    <SectionWrapper sectionId="biodiversity">
      <div className=" bg-slate-200 w-full h-full">
        <div className="container mx-auto py-10">
          <h2>Biodiversity</h2>
          <div className="flex flex-col py-10 md:flex-row">
            <div className="w-full">
              <h3></h3>
              <div className="flex">
                <div
                  style={{ height: "600px", width: "100%" }}
                  className="pt-12"
                >
                  <CirclePackingViz data={startData} />
                </div>
                <div
                  style={{ height: "600px", width: "100%" }}
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
