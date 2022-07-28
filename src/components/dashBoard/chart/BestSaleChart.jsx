import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { useSelector } from "react-redux";
import BestSale from "../../BestSale";
const data = [
  {
    id: "css",
    label: "css",
    value: 312,
    color: "hsl(299, 70%, 50%)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 251,
    color: "hsl(163, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 428,
    color: "hsl(113, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 593,
    color: "hsl(41, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 381,
    color: "hsl(239, 70%, 50%)",
  },
];
const BestSaleChart = () => {
  const { bestSale } = useSelector((state) => state.bestSale);
  // console.log("hello best sale", bestSale);
  return (
    <div style={{ height: "500px" }}>
      <BestSale data={data} />
    </div>
  );
};

export default BestSaleChart;
