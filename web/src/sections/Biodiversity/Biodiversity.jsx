import SectionWrapper from "../../components/SectionWrapper";
import CirclePackingViz from "./CirclePackViz";
import { startData, endData } from "./panama/biodivData";

function Biodiversity() {
  return (
    <SectionWrapper sectionId="biodiversity">
      <div className=" bg-slate-200 w-full h-full">
        <div className="container mx-auto px-4 py-10">
          <h2>Biodiversity</h2>
          <div className="flex flex-col py-10 md:flex-row">
            <div className="w-full">
              <h3></h3>
              <div className="flex flex-col md:flex-row">
                <div className="pt-12 w-full h-[400px]  md:h-[600px]">
                  <CirclePackingViz data={startData} />
                </div>
                <div className="pt-12 w-full h-[400px]  md:h-[600px]">
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
