import SectionWrapper from "../../components/SectionWrapper";
import ModelControlls from "./ModelControlls";
import ModelViz from "./ModelViz";

function Model() {
  return (
    <SectionWrapper sectionId="hero-banner">
      <div className=" bg-slate-100 w-full h-full">
        <div className="container mx-auto px-4 py-10">
          <h2>Model playground</h2>
          <div className="flex flex-col p-10 md:flex-row">
            <div className="w-1/2">
              <h3>Visual representation of the model</h3>
              <div style={{ height: "450px" }} className="pt-12">
                <ModelViz />
              </div>
            </div>
            <div className="w-1/2">
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
