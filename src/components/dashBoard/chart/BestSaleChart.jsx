import React from "react";
import { useSelector } from "react-redux";
import BestSale from "../../BestSale";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const BestSaleChart = () => {
  const { bestSale } = useSelector((state) => state.bestSale);
  // console.log("hello best sale", bestSale);
  return (
    <div>
      <h1>hello chart</h1>
    </div>
  );
};

export default BestSaleChart;
