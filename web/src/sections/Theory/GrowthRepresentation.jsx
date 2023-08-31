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
  componentDidMount() {
    if (document.querySelector("canvas") !== null) return;
    var DOMElement = d3
      .select("#container")
      .append("canvas")
      .attr("width", W + 28)
      .attr("height", H);
    var canvas = DOMElement.node().getContext("2d");

    const pi = Math.PI,
      sin = Math.sin,
      cos = Math.cos;
    let tick = 0;

    while (true) {
      // Draw single tree per each loop
      let growingPoints = [
        // x, y, theta, len
        [rnd(0.5, 1.2), rnd(0.0, 0.05), 0.5 * pi, rnd(0.1, 0.05)],
      ];

      canvas.fillStyle = "rgba(255,255,255,0.002)";
      canvas.fillRect(0, 0, W, H);

      if (growingPoints.length > 0) {
        let nextPoints = [];
        for (let i = 0; i < growingPoints.length; i++) {
          // Draw branch from current growing point
          let p = growingPoints[i];
          let x1 = p[0];
          let y1 = p[1];
          let len = p[3] * Math.min(1.0, rnd(lenBase, lenVar));
          let x2 = x1 + cos(p[2]) * len;
          let y2 = y1 + sin(p[2]) * len;

          canvas.beginPath();
          canvas.strokeStyle =
            p[3] > 0.01 ? "rgb(80,50,50)" : "rgba(0,100,0,0.8)";
          canvas.lineWidth = p[3] * 50;
          canvas.moveTo((x1 * W) | 0, (H - y1 * H) | 0);
          canvas.lineTo((x2 * W) | 0, (H - y2 * H) | 0);
          canvas.stroke();

          // Add next growing points
          if (len * H > 2) {
            if (Math.random() > 0.1)
              nextPoints.push([x2, y2, p[2] + rnd(thetaBase, thetaVar), len]);
            if (Math.random() > 0.1)
              nextPoints.push([x2, y2, p[2] - rnd(thetaBase, thetaVar), len]);
          }

          // Draw 2,000 branches per each yield
          tick++;
          if (tick % 5000 === 0) return tick;
        }
        growingPoints = nextPoints;
      }
    }
  }

  render() {
    return <div id="container"></div>;
  }
}

export default GrowthRepresentation;
