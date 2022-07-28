import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import "../assets/styles/bestSlae.css";
import { Grid } from "@mui/material";

const BestSale = () => {
  const { bestSale: data } = useSelector((state) => state.bestSale);
  // console.log("hello best sale", bestSale);
  const [bestSale, setBestSale] = useState([]);
  useEffect(() => {
    const result = data?.map((item, index) => {
      return setBestSale(item[index].products);
    });
  }, [data]);
  return (
    <div className="best_sale_container">
      <div style={{ borderBottom: "2px solid rgba(128, 128, 128, 0.493)" }}>
        <div className="best_saleHeader">
          <i
            style={{
              fontFamily: "cursive",
              letterSpacing: "5px",
              fontWeight: "600",
            }}
          >
            Best Sale
          </i>
        </div>
      </div>
      <Grid container rowSpacing={1} columnSpacing={1}>
        {bestSale?.map((item, i) => {
          return (
            <Grid key={i} item xs={12} md={2}>
              <div
                style={{
                  height: "270px",
                  width: "100%",
                  boxSizing: "border-box",
                  boxShadow:
                    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                  backgroundColor: "white",
                  borderRadius: "7px",
                  padding: "5px 10px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    position: "relative",
                    cursor: "pointer",
                    borderBottom: "2px solid rgba(128, 128, 128, 0.082)",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{
                      width: "170px",
                      height: "130px",
                      padding: "6px",
                      borderRadius: "11px",
                    }}
                    src={item.ProductImage}
                    alt=""
                  />
                </div>

                <div>
                  <p>{item.ProductName}</p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default BestSale;
