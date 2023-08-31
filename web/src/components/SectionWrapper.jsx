function SectionWrapper({ children, sectionId }) {
  return (
    <div id={sectionId} className="h-screen relative ">
      {children}
    </div>
  );
}

export default SectionWrapper;
