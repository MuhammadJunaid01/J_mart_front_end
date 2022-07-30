import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const CustomPieChart = () => {
  const data01 = [
    { name: "January", value: 400 },
    { name: "February", value: 300 },
    { name: "March", value: 300 },
    { name: "April", value: 700 },
    { name: "May", value: 278 },
    { name: "June", value: 189 },
    { name: "July", value: 189 },
    { name: "August", value: 189 },
    { name: "September", value: 189 },
    { name: "October", value: 189 },
    { name: "November", value: 189 },
    { name: "December", value: 189 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={70}
          fill="#00B579"
          label
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
