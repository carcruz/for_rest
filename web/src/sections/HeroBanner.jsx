import SectionWrapper from "../components/SectionWrapper";

function HeroBanner() {
  return (
    <SectionWrapper sectionId="hero-banner">
      <div className="bg-slate-100 w-full">
        <div className="flex items-center justify-center h-screen">
          <h1>FOR REST</h1>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default HeroBanner;
