import React, { useEffect, useState } from "react";
import DrawerCart from "../../components/DrawerCart";
import SliderBanner from "../../components/SliderBanner";
import Products from "../products/Products";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import { Link, Route } from "react-router-dom";
import "./home.css";
import Category from "../../components/Category";
import menuItems from "../../assets/data/menuItems";
import HomeRoutes from "../../components/HomeRoutes";
import TopRated from "../../components/TopRated";
import BestSale from "../../components/BestSale";
import MarqueeSlider from "../../components/Testimonal";
import QuickVeiw from "../../components/QuickVeiw";
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
    <div style={{ padding: "10px" }}>
      <SliderBanner />
      <Grid container>
        <Grid item xs={12} md={2}>
          <Category />
        </Grid>
        <Grid item xs={12} md={10}>
          <HomeRoutes />
        </Grid>

        <Grid item xs={12} md={12}>
          <MarqueeSlider />
        </Grid>
        <Grid item xs={12} md={12}>
          <BestSale />
        </Grid>
      </Grid>
      {/* <QuickVeiw /> */}
    </div>
  );
};

export default Home;
