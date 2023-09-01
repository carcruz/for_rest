// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/circle-packing
import { ResponsiveCirclePackingCanvas } from "@nivo/circle-packing";
import { useState } from "react";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CirclePackingViz = ({ data /* see data tab */ }) => {
  const [zoomedId, setZoomedId] = useState(null);
  return (
    <ResponsiveCirclePackingCanvas
      data={data}
      zoomedId={zoomedId}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      id="name"
      value="loc"
      colors={{ scheme: "greys" }}
      childColor={{
        from: "color",
        modifiers: [["brighter", 0.4]],
      }}
      padding={4}
      enableLabels={true}
      labelsFilter={(n) => 2 === n.node.depth}
      labelsSkipRadius={10}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.5]],
      }}
      onClick={(node) => {
        setZoomedId(zoomedId === node.name ? null : node.name);
      }}
    />
  );
};

export default CirclePackingViz;
