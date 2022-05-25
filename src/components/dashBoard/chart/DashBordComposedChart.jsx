import React from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartData } from "../../../assets/data/chartdata";

const DashBordComposedChart = () => {
  return (
    <div>
      <ComposedChart width={730} height={250} data={chartData}>
        <XAxis dataKey="time" />
        <YAxis yAxisId={1} orientation="right" />
        <YAxis yAxisId={2} />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar yAxisId={1} dataKey="laptop" barSize={10} fill="#99AEFE" />
        <Line yAxisId={2} type="monotone" dataKey="laptop" stroke="#F1B44C" />
        <Line yAxisId={2} type="monotone" dataKey="desktop" stroke="#50FA7B" />
        <Line yAxisId={2} type="monotone" dataKey="iphone" stroke="#444738" />
        <Line yAxisId={2} type="monotone" dataKey="tablet" stroke="#34C38F" />
      </ComposedChart>
    </div>
  );
};

export default DashBordComposedChart;
