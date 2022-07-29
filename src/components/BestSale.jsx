import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import "../assets/styles/bestSlae.css";
import { Grid } from "@mui/material";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QuickVeiw from "./QuickVeiw";
import { quickVeiw } from "../redux/reduicers/quickVeiw/quickVeiw";
import Loader from "./Loader";

const BestSale = () => {
  const dispatch = useDispatch();
  const { bestSale: data } = useSelector((state) => state.bestSale);
  const [bestSale, setBestSale] = useState([]);
  useEffect(() => {
    const result = data?.map((item, index) => {
      return setBestSale(item[index].products);
    });
  }, [data]);
  const handleQuickVeiw = (product) => {
    dispatch(quickVeiw(product));
  };
  if (!data) {
    return <Loader />;
  }
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
      <br />
      <Grid container rowSpacing={1} columnSpacing={1}>
        {bestSale?.map((item, i) => {
          return (
            <Grid key={i} item xs={12} md={2}>
              <div className="best_Sale_product_card">
                <div className="best_Sale_product_card_image">
                  <img src={item.ProductImage} alt="" />
                </div>

                <div>
                  <p>{item.ProductName}</p>
                </div>
                <div className="best_sale_quick_veiw_container">
                  <p>
                    <ShoppingCartIcon />
                  </p>
                  <p onClick={() => handleQuickVeiw(item)}>
                    <FitScreenIcon />
                  </p>
                </div>
              </div>
              <QuickVeiw />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default BestSale;
