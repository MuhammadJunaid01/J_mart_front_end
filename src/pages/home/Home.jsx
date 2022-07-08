import React, { useEffect, useState } from "react";
import DrawerCart from "../../components/DrawerCart";
import SliderBanner from "../../components/SliderBanner";
import Products from "../products/Products";
import { useSelector } from "react-redux";
import "./home.css";
const Home = () => {
  const [data, setData] = useState([]);
  const { openDrawerBox } = useSelector((state) => state.draw);
  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => setData(data.students));
  }, []);

  // console.log(data);

  return (
    <div
      className={openDrawerBox ? "home_container" : ""}
      style={{ padding: "10px" }}
    >
      <SliderBanner />
      <Products />
      <DrawerCart />
    </div>
  );
};

export default Home;
