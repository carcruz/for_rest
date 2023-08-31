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
    height: 0.6827840632552957,
  },
   {
    time: 97,
    height: 1.083852140278578,
  },
    {
    time: 98,
    height: 1.4202480846149885,
  },
    {
    time: 99,
    height: 1.4202480846149885,
  },
    {
    time: 100,
    height: 1.4202480846149885,
  },
    {
    time: 101,
    height: 1.7205080276561993,
  },
    {
    time: 102,
    height: 1.7205080276561993,
  },
    {
    time: 103,
    height: 1.7205080276561993,
  },
    {
    time: 104,
    height: 1.7205080276561993,
  },
    {
    time: 105,
    height: 1.7205080276561993,
  },
    {
    time: 106,
    height: 2.498515621382789,
  },
    {
    time: 107,
    height: 2.7311362530211825,
  },
    {
    time: 108,
    height: 2.7311362530211825,
  },
    {
    time: 109,
    height: 2.7311362530211825,
  },
    {
    time: 110,
    height: 2.9542350655280893,
  },
      {
    time: 111,
    height: 3.1692028837745414,
  },
      {
    time: 112,
    height: 3.7749593321072,
  },
      {
    time: 113,
    height: 3.7749593321072,
  },
      {
    time: 114,
    height: 3.7749593321072,
  },
      {
    time: 115,
    height: 3.7749593321072,
  },
      {
    time: 116,
    height: 4.152830592077073,
  },
      {
    time: 117,
    height: 4.152830592077073,
  },
      {
    time: 118,
    height: 4.335408561114312,
  },
      {
    time: 119,
    height: 4.514219336190481,
  },
      {
    time: 120,
    height: 4.689555850780632,
  },
      {
    time: 121,
    height: 4.689555850780632,
  },
      {
    time: 122,
    height: 5.197121925680816,
  },
      {
    time: 123,
    height: 5.522070324010537,
  },
      {
    time: 124,
    height: 5.522070324010537,
  },
      {
    time: 125,
    height: 5.680992338459954,
  },
      {
    time: 126,
    height: 5.837721624703679,
  },
      {
    time: 127,
    height: 5.992374414924142,
  },
      {
    time: 128,
    height: 6.145056569297661,
  },
      {
    time: 129,
    height: 6.444887997507667,
  },
      {
    time: 130,
    height: 6.737899128779953,
  },
      {
    time: 131,
    height: 6.882032110624796,
  },
      {
    time: 132,
    height: 7.024671217612213,
  },
      {
    time: 133,
    height: 7.16587652308396,
  },
      {
    time: 134,
    height: 7.305703996125216,
  },
      {
    time: 135,
    height: 7.4442058907928,
  },
      {
    time: 136,
    height: 7.7174254015156505,
  },
      {
    time: 137,
    height: 7.852231839395006,
  },
      {
    time: 138,
    height: 8.24991681203272,
  },
      {
    time: 139,
    height: 8.38035364920446,
  },
      {
    time: 140,
    height: 8.509783151598915,
  },
      {
    time: 141,
    height: 8.63823573445458,
  },
      {
    time: 142,
    height: 8.765740241376701,
  },
      {
    time: 143,
    height: 8.892324057845862,
  },
      {
    time: 144,
    height: 8.892324057845862,
  },
      {
    time: 145,
    height: 9.018013214294612,
  },
      {
    time: 146,
    height: 9.14283247990763,
  },
      {
    time: 147,
    height: 9.389954614917926,
  },
      {
    time: 148,
    height: 9.512301450037906,
  },
      {
    time: 149,
    height: 9.633866462865724,
  },
      {
    time: 150,
    height: 9.754669262507202,
  },
      {
    time: 151,
    height: 9.874728613231921,
  },
      {
    time: 152,
    height: 9.874728613231921,
  },
      {
    time: 153,
    height: 9.994062485531158,
  },
      {
    time: 154,
    height: 10.112688103235639,
  },
      {
    time: 155,
    height: 10.347879994907737,
  },
      {
    time: 156,
    height: 10.58042872159525,
  },
      {
    time: 157,
    height: 10.69574816508091,
  },
      {
    time: 158,
    height: 11.038048048113648,
  },
      {
    time: 159,
    height: 11.375119931017698,
  },
      {
    time: 160,
    height: 11.597082208817445,
  },
      {
    time: 161,
    height: 11.597082208817445,
  },
      {
    time: 162,
    height: 11.707269294303716,
  },
      {
    time: 163,
    height: 12.034771685594317,
  },
      {
    time: 164,
    height: 12.142950315026402,
  },
      {
    time: 165,
    height: 12.142950315026402,
  },
      {
    time: 166,
    height: 12.464641082153825,
  },
      {
    time: 167,
    height: 12.676811535098164,
  },
      {
    time: 168,
    height: 12.782232761534896,
  },
      {
    time: 169,
    height: 12.782232761534896,
  },
      {
    time: 170,
    height: 12.887221034394388,
  },
      {
    time: 171,
    height: 13.095926626070876,
  },
      {
    time: 172,
    height: 13.302982198612698,
  },
        {
    time: 173,
    height: 13.610582536910858,
  },
        {
    time: 174,
    height: 13.81373023908438,
  },
        {
    time: 175,
    height: 14.015394979130695,
  },
        {
    time: 176,
    height: 14.215619133795546,
  },
        {
    time: 177,
    height: 14.31520366303439,
  },
        {
    time: 178,
    height: 14.5133418965744,
  },
        {
    time: 179,
    height: 14.611904962013485,
  },
        {
    time: 180,
    height: 14.710136716781328,
  },
        {
    time: 181,
    height: 15.002887714443691,
  },
        {
    time: 182,
    height: 15.0998373284288,
  },
        {
    time: 183,
    height: 15.196476698345712,
  },
        {
    time: 184,
    height: 15.196476698345712,
  },
        {
    time: 185,
    height: 15.388840353440365,
  },
        {
    time: 186,
    height: 15.48457224890579,
  },
        {
    time: 187,
    height: 15.48457224890579,
  },
        {
    time: 188,
    height: 15.864585302968075,
  },
        {
    time: 189,
    height: 16.24010010454945,
  },
        {
    time: 190,
    height: 16.24010010454945,
  },
          {
    time: 191,
    height: 16.333300423978653,
  },
          {
    time: 192,
    height: 16.611322368308294,
  },
          {
    time: 193,
    height: 16.611322368308294,
  },
          {
    time: 194,
    height: 16.611322368308294,
  },
          {
    time: 195,
    height: 16.611322368308294,
  },
          {
    time: 196,
    height: 16.79538368293485,
  },
          {
    time: 197,
    height: 16.79538368293485,
  },
          {
    time: 198,
    height: 16.887036810578483,
  },
          {
    time: 199,
    height: 17.06960158138239,
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
          <Line type="monotone" dataKey="height" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default GrowthChart;
