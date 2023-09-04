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
    time: 96,
    growth: 0.6827840632552957,
  },
  {
    time: 97,
    growth: 1.083852140278578,
  },
  {
    time: 98,
    growth: 1.4202480846149885,
  },
  {
    time: 99,
    growth: 1.4202480846149885,
  },
  {
    time: 100,
    growth: 1.4202480846149885,
  },
  {
    time: 101,
    growth: 1.7205080276561993,
  },
  {
    time: 102,
    growth: 1.7205080276561993,
  },
  {
    time: 103,
    growth: 1.7205080276561993,
  },
  {
    time: 104,
    growth: 1.7205080276561993,
  },
  {
    time: 105,
    growth: 1.7205080276561993,
  },
  {
    time: 106,
    growth: 2.498515621382789,
  },
  {
    time: 107,
    growth: 2.7311362530211825,
  },
  {
    time: 108,
    growth: 2.7311362530211825,
  },
  {
    time: 109,
    growth: 2.7311362530211825,
  },
  {
    time: 110,
    growth: 2.9542350655280893,
  },
  {
    time: 111,
    growth: 3.1692028837745414,
  },
  {
    time: 112,
    growth: 3.7749593321072,
  },
  {
    time: 113,
    growth: 3.7749593321072,
  },
  {
    time: 114,
    growth: 3.7749593321072,
  },
  {
    time: 115,
    growth: 3.7749593321072,
  },
  {
    time: 116,
    growth: 4.152830592077073,
  },
  {
    time: 117,
    growth: 4.152830592077073,
  },
  {
    time: 118,
    growth: 4.335408561114312,
  },
  {
    time: 119,
    growth: 4.514219336190481,
  },
  {
    time: 120,
    growth: 4.689555850780632,
  },
  {
    time: 121,
    growth: 4.689555850780632,
  },
  {
    time: 122,
    growth: 5.197121925680816,
  },
  {
    time: 123,
    growth: 5.522070324010537,
  },
  {
    time: 124,
    growth: 5.522070324010537,
  },
  {
    time: 125,
    growth: 5.680992338459954,
  },
  {
    time: 126,
    growth: 5.837721624703679,
  },
  {
    time: 127,
    growth: 5.992374414924142,
  },
  {
    time: 128,
    growth: 6.145056569297661,
  },
  {
    time: 129,
    growth: 6.444887997507667,
  },
  {
    time: 130,
    growth: 6.737899128779953,
  },
  {
    time: 131,
    growth: 6.882032110624796,
  },
  {
    time: 132,
    growth: 7.024671217612213,
  },
  {
    time: 133,
    growth: 7.16587652308396,
  },
  {
    time: 134,
    growth: 7.305703996125216,
  },
  {
    time: 135,
    growth: 7.4442058907928,
  },
  {
    time: 136,
    growth: 7.7174254015156505,
  },
  {
    time: 137,
    growth: 7.852231839395006,
  },
  {
    time: 138,
    growth: 8.24991681203272,
  },
  {
    time: 139,
    growth: 8.38035364920446,
  },
  {
    time: 140,
    growth: 8.509783151598915,
  },
  {
    time: 141,
    growth: 8.63823573445458,
  },
  {
    time: 142,
    growth: 8.765740241376701,
  },
  {
    time: 143,
    growth: 8.892324057845862,
  },
  {
    time: 144,
    growth: 8.892324057845862,
  },
  {
    time: 145,
    growth: 9.018013214294612,
  },
  {
    time: 146,
    growth: 9.14283247990763,
  },
  {
    time: 147,
    growth: 9.389954614917926,
  },
  {
    time: 148,
    growth: 9.512301450037906,
  },
  {
    time: 149,
    growth: 9.633866462865724,
  },
  {
    time: 150,
    growth: 9.754669262507202,
  },
  {
    time: 151,
    growth: 9.874728613231921,
  },
  {
    time: 152,
    growth: 9.874728613231921,
  },
  {
    time: 153,
    growth: 9.994062485531158,
  },
  {
    time: 154,
    growth: 10.112688103235639,
  },
  {
    time: 155,
    growth: 10.347879994907737,
  },
  {
    time: 156,
    growth: 10.58042872159525,
  },
  {
    time: 157,
    growth: 10.69574816508091,
  },
  {
    time: 158,
    growth: 11.038048048113648,
  },
  {
    time: 159,
    growth: 11.375119931017698,
  },
  {
    time: 160,
    growth: 11.597082208817445,
  },
  {
    time: 161,
    growth: 11.597082208817445,
  },
  {
    time: 162,
    growth: 11.707269294303716,
  },
  {
    time: 163,
    growth: 12.034771685594317,
  },
  {
    time: 164,
    growth: 12.142950315026402,
  },
  {
    time: 165,
    growth: 12.142950315026402,
  },
  {
    time: 166,
    growth: 12.464641082153825,
  },
  {
    time: 167,
    growth: 12.676811535098164,
  },
  {
    time: 168,
    growth: 12.782232761534896,
  },
  {
    time: 169,
    growth: 12.782232761534896,
  },
  {
    time: 170,
    growth: 12.887221034394388,
  },
  {
    time: 171,
    growth: 13.095926626070876,
  },
  {
    time: 172,
    growth: 13.302982198612698,
  },
  {
    time: 173,
    growth: 13.610582536910858,
  },
  {
    time: 174,
    growth: 13.81373023908438,
  },
  {
    time: 175,
    growth: 14.015394979130695,
  },
  {
    time: 176,
    growth: 14.215619133795546,
  },
  {
    time: 177,
    growth: 14.31520366303439,
  },
  {
    time: 178,
    growth: 14.5133418965744,
  },
  {
    time: 179,
    growth: 14.611904962013485,
  },
  {
    time: 180,
    growth: 14.710136716781328,
  },
  {
    time: 181,
    growth: 15.002887714443691,
  },
  {
    time: 182,
    growth: 15.0998373284288,
  },
  {
    time: 183,
    growth: 15.196476698345712,
  },
  {
    time: 184,
    growth: 15.196476698345712,
  },
  {
    time: 185,
    growth: 15.388840353440365,
  },
  {
    time: 186,
    growth: 15.48457224890579,
  },
  {
    time: 187,
    growth: 15.48457224890579,
  },
  {
    time: 188,
    growth: 15.864585302968075,
  },
  {
    time: 189,
    growth: 16.24010010454945,
  },
  {
    time: 190,
    growth: 16.24010010454945,
  },
  {
    time: 191,
    growth: 16.333300423978653,
  },
  {
    time: 192,
    growth: 16.611322368308294,
  },
  {
    time: 193,
    growth: 16.611322368308294,
  },
  {
    time: 194,
    growth: 16.611322368308294,
  },
  {
    time: 195,
    growth: 16.611322368308294,
  },
  {
    time: 196,
    growth: 16.79538368293485,
  },
  {
    time: 197,
    growth: 16.79538368293485,
  },
  {
    time: 198,
    growth: 16.887036810578483,
  },
  {
    time: 199,
    growth: 17.06960158138239,
  },
];

class GrowthChart extends PureComponent {
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
          <Line
            type="monotone"
            dataKey="growth"
            stroke="rgba(0,100,0,0.8)"
            animationDuration={8000}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default GrowthChart;
