import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CopyToClipBoard from "../../components/CopyCouponCode";
import Timer from "../../components/Timer";
import { offerTime } from "../../redux/reduicers/offer/offerSlice";

const Test = ({ expireTime, offerImage, days, hours, minutes, secounds }) => {
  const dispatch = useDispatch();
  const myInterval = (Time) => {
    setInterval(() => {
      dispatch(offerTime(Time));
    }, 1000);
  };
  useEffect(() => {
    // console.log("hello timer", days, hours, minutes, secounds);
    myInterval(expireTime);
  }, [secounds]);
  return (
    <div>
      <Grid container>
        <Grid item xs={4} md={3}>
          <div className="offer_image">
            <img src={offerImage} alt="offer_image" />
          </div>
        </Grid>
        <Grid item xs={8} md={6}>
          <div style={{ textAlign: "center" }}>
            <span>10% Off</span> <span>Active</span>
            <Timer
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={secounds}
            />
          </div>
        </Grid>
        <Grid item xs={8} md={3}>
          <CopyToClipBoard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Test;
