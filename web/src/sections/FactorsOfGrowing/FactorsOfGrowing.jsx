import SectionWrapper from "../../components/SectionWrapper";
import Resources from "./Resources";

function FactorsOfGrowing() {
  return (
    <SectionWrapper sectionId="hero-banner">
      <div className=" bg-slate-100 min-h-full overflow-hidden">
        <div className="container mx-auto px-4 py-10">
          <h2>Factors of Growing</h2>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mb-6 md:mb-12 md:mt-24 md:w-1/2">
              <h3>Gradual addition of complexity</h3>
              <div className="pt-12">
                <p>
                  Distribution of trees in a forest is not random, since local
                  competition powered by the laws of metabolic growth determines
                  population size distribution. Proximity can be a limiting
                  factor, so can be access to water.
                </p>
                <br />
                <p>
                  This behaviour can be modelled. Lee et al, PNAS 2021 have
                  developed a minimal dynamical model that integrates timescales
                  of individual growth and mortality with competitive attrition
                  on a background of fluctuating resources
                </p>
                <br />
                <p>
                  Our minimal quantitative theory unifies spatiotemporal
                  patterns across sessile organisms through local competition
                  mediated by the laws of metabolic growth, which in turn, are
                  the result of long-term evolutionary dynamics.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <Resources />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default FactorsOfGrowing;
