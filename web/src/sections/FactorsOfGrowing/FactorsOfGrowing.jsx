import SectionWrapper from "../../components/SectionWrapper";
import Resources from "./Resources";

function FactorsOfGrowing() {
  return (
    <SectionWrapper sectionId="hero-banner">
      <div className=" bg-slate-100 w-full h-full">
        <div className="container mx-auto px-4 py-10">
          <h2>Factors of Growing</h2>
          <div className="flex flex-row p-10">
            <div className="w-1/2">
              <h3>Gradual addition of complexity</h3>
              <div style={{ height: "450px" }} className="pt-12">
                hi
              </div>
            </div>
            <div className="w-1/2">
              <h3>Resources</h3>
              <div style={{ height: "450px" }} className="pt-12">
                <Resources />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default FactorsOfGrowing;
