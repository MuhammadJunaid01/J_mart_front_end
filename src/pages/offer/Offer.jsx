import React from "react";
import { Grid } from "@mui/material";
import Timer from "../../components/Timer";
import "../../assets/styles/offer.css";
import offerImage from "../../assets/images/banner2.jpg";
import offerImage2 from "../../assets/images/banner1.jpg";
import CopyToClipBoard from "../../components/CopyCouponCode";
import { useSelector, useDispatch } from "react-redux";
import SweetPagination from "sweetpagination";

import {
  offerTime,
  useGetAllOfferQuery,
} from "../../redux/reduicers/offer/offerSlice";
import { useEffect } from "react";
import { useState } from "react";
import Test from "./Test";
const Offer = () => {
  const { data, isError, isLoading } = useGetAllOfferQuery();
  const { days, hours, minutes, secounds } = useSelector(
    (state) => state.offer
  );

  const dispatch = useDispatch();
  const myInterval = (payload) => {
    setInterval(() => {
      dispatch(offerTime(payload));
    }, 1000);
  };
  useEffect(() => {
    // console.log("hello timer", days, hours, minutes, secounds);
    myInterval(data);
  }, [secounds, data]);
  //
  // console.log("offer data", data);
  return (
    <div className="offer_container">
      <div className="offer_title">
        <p>Active Offer</p>
      </div>
      <Grid container>
        {data?.map((item, i, arr) => {
          return (
            // <Test
            //   key={i}
            //   expireTime={item.expireDate}
            //   offerImage={offerImage}
            //   days={days}
            //   hours={hours}
            //   minutes={minutes}
            //   secounds={secounds}
            // />
            <Grid container key={i}>
              <Grid key={i} item xs={4} md={3}>
                <div className="offer_image">
                  <img src={offerImage} alt="offer_image" />
                </div>
              </Grid>
              <Grid item xs={8} md={6}>
                <div style={{ textAlign: "center" }}>
                  <span>10% Off</span> <span>Active</span>
                  <Timer data={arr[i]} />
                </div>
              </Grid>
              <Grid item xs={8} md={3}>
                <CopyToClipBoard />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      {/* secound offer */}
      <div>
        <hr style={{ borderTop: "2px solid gray", width: "11rem" }} />
        {/* <Grid container>
          <Grid item xs={4} md={3}>
            <div className="offer_image">
              <img src={offerImage2} alt="offer_image" />
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
        </Grid> */}
      </div>
    </div>
  );
};

export default Offer;
