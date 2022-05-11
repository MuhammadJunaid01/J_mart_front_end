import React from "react";
import { Grid } from "@mui/material";
import Timer from "../../components/Timer";
import "../../assets/styles/offer.css";
import offerImage from "../../assets/images/banner2.jpg";
import CopyToClipBoard from "../../components/CopyCouponCode";
const Offer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="offer_container">
      <div className="offer_title">
        <p>Active Offer</p>
      </div>
      <Grid container>
        <Grid item xs={4} md={3}>
          <div className="offer_image">
            <img src={offerImage} alt="offer_image" />
          </div>
        </Grid>
        <Grid item xs={8} md={6}>
          <div style={{ textAlign: "center" }}>
            <span>10% Off</span> <span>Active</span>
            <Timer expiryTimestamp={time} />
          </div>
        </Grid>
        <Grid item xs={8} md={3}>
          <CopyToClipBoard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Offer;
