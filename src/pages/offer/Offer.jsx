import React from "react";
import { Grid } from "@mui/material";
import Timer from "../../components/Timer";
import "../../assets/styles/offer.css";
import CopyToClipBoard from "../../components/CopyCouponCode";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllOfferQuery } from "../../redux/reduicers/offer/offerSlice";
import { useState } from "react";
import { oferUrlImage } from "../../redux/api/api";
import Loader from "../../components/Loader";
const Offer = () => {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  const { data, isError, isLoading } = useGetAllOfferQuery();
  const { days, hours, minutes, secounds } = useSelector(
    (state) => state.offer
  );

  if (data === undefined) {
    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: "120px" }}>
          <Grid container>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={2}>
              <Loader />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
  console.log("offer data", data);
  return (
    <div style={{ cursor: "pointer" }} className="offer_container">
      <div className="offer_title">
        <i
          style={{
            fontSize: "23px",
            fontWeight: "500",
            fontFamily: "monospace",
          }}
        >
          Active offer
        </i>
      </div>

      {data?.map((item, i, arr) => {
        return (
          <div
            key={i}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              padding: "20px 9px",
              marginTop: "7px",
              borderRadius: "7px",
              boxSizing: "border-box",
            }}
          >
            <Grid container key={i}>
              <Grid key={i} item xs={12} md={3}>
                <div className="offer_image">
                  <img src={item.ProductImage} alt="offer_image" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ textAlign: "center" }}>
                  <Timer data={arr[i]} arr={arr} count={i} />
                </div>
              </Grid>
              <Grid item xs={12} md={3}>
                <CopyToClipBoard copun={item.copunCode} />
              </Grid>
            </Grid>
          </div>
        );
      })}

      {/* secound offer */}
    </div>
  );
};

export default Offer;
