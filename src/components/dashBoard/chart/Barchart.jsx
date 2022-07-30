import React from "react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "January",
    uv: 4000,
    sale: 2400,
    amt: 2400,
  },
  {
    name: "February",
    uv: 3000,
    sale: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    sale: 100,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    sale: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    sale: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    sale: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    sale: 4300,
    amt: 2100,
  },
  {
    name: "August",
    uv: 2390,
    sale: 3800,
    amt: 2500,
  },
  {
    name: "September",
    uv: 3490,
    sale: 4300,
    amt: 2100,
  },
  {
    name: "October",
    uv: 2390,
    sale: 3800,
    amt: 2500,
  },
  {
    name: "November",
    uv: 3490,
    sale: 4300,
    amt: 2100,
  },
  {
    name: "December",
    uv: 2390,
    sale: 3800,
    amt: 2500,
  },
];

const Barchart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={25}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 2, right: 1 }} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="sale" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Barchart;
