import { PureComponent } from "react";
import * as d3 from "d3";

const W = 450;
const H = 400;
const thetaVar = 0.3;
const thetaBase = 0.3;
const lenBase = 0.75;
const lenVar = 0.5;

function rnd(base, variant) {
  return base + (Math.random() - 0.5) * variant;
}

class GrowthRepresentation extends PureComponent {
  componentDidMount() {}

  render() {
    // return <div id="container"></div>;
    return (
      <iframe
        width="100%"
        height="554"
        src="https://observablehq.com/embed/b69d137c875b2a74?cells=viewof+canvas"
      ></iframe>
    );
  }
}

export default GrowthRepresentation;
