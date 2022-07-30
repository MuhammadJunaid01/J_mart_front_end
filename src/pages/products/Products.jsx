import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import "../../assets/styles/products.css";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import "../../assets/styles/products.css";
import { addToCart } from "../../redux/reduicers/cart/cart";
import DrawerCart from "../../components/DrawerCart";
import { traking, getTrackerData } from "../../redux/reduicers/tracker";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  allProducts,
  useGetAllProductsQuery,
} from "../../redux/reduicers/products/inedx";
import Loader from "../../components/Loader";
import Chat from "../../components/Chat";
import { quickVeiw } from "../../redux/reduicers/quickVeiw/quickVeiw";
import QuickVeiw from "../../components/QuickVeiw";

const Products = () => {
  const navigate = useNavigate();

  const { data, isError, isSuccess, isLoading } = useGetAllProductsQuery();
  const { quickVeiw: quick } = useSelector((state) => state.quickVeiw);

  const { products } = useSelector((state) => state.products);
  const { trackingData } = useSelector((state) => state.traker);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  useEffect(() => {
    if (data) {
      dispatch(allProducts(data.data));
    }
  }, [data]);
  const handleNavigate = (product) => {
    navigate(`/product/${product._id}`);
    dispatch(traking(product));
    // ReactGA.event({
    //   category: "products",
    //   action: "productsClick",
    //   label: "bookMarks",
    // });
  };
  if (isLoading) {
    return <Loader />;
  }
  const handleQuickVeiw = (product) => {
    dispatch(quickVeiw(product));
  };
  return (
    <div className="products_container">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        {data?.data.map((product, i) => (
          <Grid key={i} item xs={12} md={3}>
            <div className="products_card_container">
              <div
                className="products_card_image"
                onClick={() => handleNavigate(product)}
              >
                <img src={product?.ProductImage} alt="product image" />
              </div>
              <div className="products_card_info">
                <strong style={{ display: "block", textAlign: "center" }}>
                  {product.Category}
                </strong>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "#000000",
                    lineHeight: "20px",
                    margin: "4px 0px",
                  }}
                >
                  {product.ProductName.slice(0, 25)}...
                </p>
                <strong>${product.Price}</strong>
              </div>
              <div className="add_to_card_quick_view">
                <p onClick={() => handleAddToCart(product)}>
                  <ShoppingCartIcon style={{}} />
                </p>
                <p onClick={() => handleQuickVeiw(product)}>
                  <FitScreenIcon />
                </p>
              </div>
            </div>
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          {/* <div
            className={quick ? " quic_veiw_content open" : " quic_veiw_content"}
          >
            <div className="quic_veiw_close">
              <p onClick={() => dispatch(quickVeiw())}>X</p>
            </div>

            <div className="quick_veiw_container">
              <div className="quic_veiw_content_content">
                <img src={quickVeiwData?.ProductImage} alt="" />
              </div>

              <div className="quick_veiw_info">
                <p>{quickVeiwData?.ProductName}</p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    marginTop: "12px",
                    lineHeight: "12px",
                    color: "#919191",
                  }}
                >
                  <StarBorderIcon
                    style={{ fontSize: "15px", color: "#9ac93c" }}
                  />
                  <StarBorderIcon
                    style={{ fontSize: "15px", color: "#9ac93c" }}
                  />
                  <StarBorderIcon
                    style={{ fontSize: "15px", color: "#9ac93c" }}
                  />
                  <StarBorderIcon
                    style={{ fontSize: "15px", color: "#9ac93c" }}
                  />
                  <StarBorderIcon
                    style={{ fontSize: "15px", color: "#9ac93c" }}
                  />{" "}
                  {quickVeiwData?.reviews.length} reviews
                </p>
                <p style={{ marginTop: "12px", fontSize: "14px" }}>
                  Regular Price: ${quickVeiwData?.Price}
                </p>
                <button
                  onClick={() => dispatch(addToCart(quickVeiwData))}
                  style={{
                    border: "none",
                    marginTop: "33px",
                    backgroundColor: "#9AC93C",
                    color: "white",
                    cursor: "pointer",
                    padding: "5px 40px",
                    fontSize: "17px",
                    borderRadius: "3px",
                  }}
                >
                  Add to Cart
                </button>
                <p
                  style={{
                    color: "#212529",
                    fontSize: "18px",
                    margin: "12px 0px",
                    lineHeight: "18px",
                    fontWeight: "700",
                  }}
                >
                  Quick Overveiw
                </p>
                <p
                  style={{
                    fontFamily: "monospace",
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#212529",
                  }}
                >
                  {quickVeiwData?.description}
                </p>
              </div>
            </div>
          </div> */}
          <QuickVeiw />
        </Grid>
      </Grid>

      <DrawerCart />
      <Chat />
    </div>
  );
};

export default Products;
