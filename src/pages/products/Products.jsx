import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import productsImg1 from "../../assets/images/banner1.jpg";
import productsImg2 from "../../assets/images/banner2.jpg";
import productsImg3 from "../../assets/images/banner3.jpg";
import "../../assets/styles/products.css";

import { addToCart } from "../../redux/reduicers/cart/cart";
import DrawerCart from "../../components/DrawerCart";
import { traking, getTrackerData } from "../../redux/reduicers/tracker";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  allProducts,
  useGetAllProductsQuery,
} from "../../redux/reduicers/products/inedx";
import Loader from "../../components/Loader";

const Products = () => {
  const navigate = useNavigate();
  const { data, isError, isSuccess, isLoading } = useGetAllProductsQuery();
  const { trackingData } = useSelector((state) => state.traker);
  const disepatch = useDispatch();
  const handleAddToCart = (item) => {
    disepatch(addToCart(item));
  };
  useEffect(() => {
    if (data) {
      disepatch(allProducts(data.data));
    }
  }, []);
  const handleNavigate = (product) => {
    navigate(`/product/${product._id}`);
    disepatch(traking(product));
  };
  console.log("all products", data);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data?.data.map((product, i) => (
          <Grid key={i} item xs={12} md={2}>
            <div
              style={{
                height: "13rem",
                border: "2px solid gray",
                cursor: "pointer",
              }}
            >
              <div
                onClick={() => handleNavigate(product)}
                style={{ width: "100%", position: "relative" }}
              >
                <img
                  style={{
                    width: "90%",
                    height: "20vh",
                    padding: "6px",
                    borderRadius: "11px",
                  }}
                  src={product.ProductImage}
                  alt="product image"
                />
              </div>
              <div>
                <span>{product.name}</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      display: "block",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    ${product.price}
                  </p>
                  <p
                    onClick={() => handleAddToCart(product)}
                    className={` "add_to_cart_btn"  }`}
                  >
                    <LocalMallIcon />
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      <DrawerCart />
    </div>
  );
};

export default Products;
