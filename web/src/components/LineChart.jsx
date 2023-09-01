import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    real: 4000,
    model: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    real: 3000,
    model: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    real: 2000,
    model: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    real: 2780,
    model: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    real: 1890,
    model: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    real: 2390,
    model: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    real: 3490,
    model: 4300,
    amt: 2100,
  },
];

class ForestLineChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="model" stroke="#2f4b7c" />
          <Line type="monotone" dataKey="real" stroke="#ff7c43" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ForestLineChart;
