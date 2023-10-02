import SectionWrapper from "../../components/SectionWrapper";
import ModelControlls from "./ModelControlls";
import ModelViz from "./ModelViz";

function Model() {
  return (
    <SectionWrapper sectionId="hero-banner">
      <div className=" bg-slate-100 w-full h-full">
        <div className="container mx-auto px-4 py-10">
          <h2>Model playground</h2>
          <div className="flex flex-col  md:p-10 pt-5 md:pt-0 md:flex-row">
            <div className="w-full md:w-1/2 pb-6 md:pb-0">
              <h3>Visual representation of the model</h3>
              <div className="pt-12 md:h-[450px]">
                <ModelViz />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3>Model controlls</h3>
              <div className="pt-12 md:h-[450px]">
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
