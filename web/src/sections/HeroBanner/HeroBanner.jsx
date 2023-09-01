import SectionWrapper from "../../components/SectionWrapper";

function HeroBanner() {
  return (
    <SectionWrapper sectionId="hero-banner">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source src="./back.mp4" type="video/mp4" />
      </video>
      <div className="w-full bg-transparent">
        <div className="flex items-center justify-center h-screen">
          <h1 style={{ color: "#fff" }}>FOR REST</h1>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default HeroBanner;
