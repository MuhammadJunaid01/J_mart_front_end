import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
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
  }, [data]);
  const handleNavigate = (product) => {
    navigate(`/product/${product._id}`);
    disepatch(traking(product));
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data?.data.map((product, i) => (
          <Grid key={i} item xs={12} md={3}>
            <div
              style={{
                height: "260px",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                backgroundColor: "white",
                borderRadius: "7px",
                padding: "5px 10px",
              }}
            >
              <div
                onClick={() => handleNavigate(product)}
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
                  src={product?.ProductImage}
                  alt="product image"
                />
              </div>
              <div>
                <p>{product?.ProductName.slice(0, 40)}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "13px",
                  }}
                >
                  <p
                    style={{
                      display: "block",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    ${product.Price}
                  </p>
                  <p
                    onClick={() => handleAddToCart(product)}
                    className={` "add_to_cart_btn"  }`}
                  >
                    <LibraryAddIcon style={{}} />
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
