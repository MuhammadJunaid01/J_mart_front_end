import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Carousel } from "react-carousel-minimal";

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

  const slideLeft = () => {
    if (slide === items.length - 1) {
      return;
    }
    setSlide((prev) => prev + 1);
  };
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="slide">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Carousel
            data={items}
            time={5000}
            width="100%"
            captionStyle={captionStyle}
            radius="5px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Offer />
        </Grid>
      </Grid>
    </div>
  );
};

export default SliderBanner;
