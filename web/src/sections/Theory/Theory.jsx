import SectionWrapper from "../../components/SectionWrapper";
import GrowthChart from "./GrowthLineChart";
import GrowthRepresentation from "./GrowthRepresentation";

function Theory() {
  return (
    <SectionWrapper sectionId="hero-banner">
      <div className=" bg-slate-200 w-full min-h-full">
        <div className="container mx-auto px-4 py-10">
          <h2>Theory</h2>
          <p className="py-10 text-lg">
            Trees grow through a timespam of several decades or even centuries.
            Starting from a small seed,through photosynthesis, leaves capture
            sunlight, converting it into energy that fuels the tree&apos;s
            growth. The continuous cycle of division, elongation, and
            differentiation results in the expansion of the tree in both height
            and girth, allowing it to thrive and become a vital component of
            thex ecosystem.
          </p>
          <div className="flex flex-col p-10 md:flex-row">
            <div className="w-1/2">
              <h3>Growth representation</h3>
              <div style={{ height: "450px" }} className="pt-12">
                <GrowthRepresentation />
              </div>
            </div>
            <div className="w-1/2">
              <h3>Growth chart</h3>
              <div style={{ height: "450px" }} className="pt-12">
                <GrowthChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Theory;
