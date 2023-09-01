function SectionWrapper({ children, sectionId }) {
  return (
    <div id={sectionId} className="relative h-auto overflow-hidden">
      {children}
    </div>
  );
}

export default SectionWrapper;
