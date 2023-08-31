import SectionWrapper from "../../components/SectionWrapper";

function Biodiversity() {
  return (
    <SectionWrapper sectionId="biodiversity">
      <div className=" bg-slate-200 w-full h-full">
        <div className="container mx-auto px-4 py-10">
          <h2>Biodiversity</h2>
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
                hi
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Biodiversity;
