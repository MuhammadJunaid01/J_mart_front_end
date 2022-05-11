import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "slick-carousel/slick/slick.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import "../assets/styles/slider.css";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import Offer from "../pages/offer/Offer";
const SliderBanner = () => {
  const [slide, setSlide] = useState(0);

  const items = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    },
  ];
  setInterval(() => {}, 2000);
  const slideLeft = () => {
    if (slide === items.length - 1) {
      return;
    }
    setSlide((prev) => prev + 1);
  };
  const slideRight = () => {
    if (slide === 0) {
      setSlide((prev) => prev + 1);

      return;
    }
    setSlide((prev) => prev - 1);
  };
  return (
    <div className="slide">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div className="slide_container">
            <img
              className="slide_image"
              src={items[slide].image}
              alt="banner"
            />
            <button onClick={slideRight} className="arrow_icon_left">
              <ArrowCircleLeftIcon />
            </button>
            <button onClick={slideLeft} className="arrow_icon_right">
              <ArrowCircleRightIcon />
            </button>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Offer />
        </Grid>
      </Grid>
    </div>
  );
};

export default SliderBanner;
