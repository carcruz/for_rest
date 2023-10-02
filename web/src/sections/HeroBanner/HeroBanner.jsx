import SectionWrapper from "../../components/SectionWrapper";

function HeroBanner() {
  return (
    <SectionWrapper sectionId="hero-banner">
      <div className="w-full bg-gray-100">
        <div className="flex items-center justify-center h-[250px] md:h-screen">
          <div className="w-full md:w-4/5">
            <img src="./background.png" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default HeroBanner;
