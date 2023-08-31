function SectionWrapper({ children, sectionId }) {
  return (
    <div id={sectionId} className="relative h-auto md:h-screen">
      {children}
    </div>
  );
}

export default SectionWrapper;
