import React from "react";
import SliderBanner from "../../components/SliderBanner";
import Products from "../products/Products";

const Home = () => {
  return (
    <div style={{ padding: "10px" }}>
      <SliderBanner />
      <Products />
    </div>
  );
};

export default Home;
