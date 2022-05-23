import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import useAuth from "../../hooks/useAuth";
import { Box, Grid } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Typography from "@mui/material/Typography";
import productsImg1 from "../../assets/images/banner1.jpg";
import productsImg2 from "../../assets/images/banner2.jpg";
import productsImg3 from "../../assets/images/banner3.jpg";
import Cart from "../../components/Cart";
import { addToCart } from "../../features/cart/cart";
import "../../assets/styles/products.css";
const products = [
  { name: "fis", id: "0", img: productsImg1, stock: true, price: 20 },
  { name: "food", id: "01", img: productsImg2, stock: false, price: 27 },
  { name: "organic", id: "02", img: productsImg3, stock: true, price: 15 },
  { name: "orange", id: " 03", img: productsImg1, stock: true, price: 40 },
  { name: "tomatto", id: " 04", img: productsImg2, stock: true, price: 22 },
  { name: "lebo", id: "05", img: productsImg3, stock: true, price: 10 },
  { name: "komola", id: "06", img: productsImg1, stock: false, price: 20 },
];
const Products = () => {
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    // console.log(item);
    dispatch(addToCart(item));
    setTimeout(() => {
      setDisable(false);
    }, 100);
    setTimeout(() => {
      setDisable(true);
    }, 2000);
  };
  const { setPrice, price } = useAuth();

  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} md={2}>
            <div style={{ height: "13rem", border: "2px solid gray" }}>
              <div style={{ width: "100%", position: "relative" }}>
                <img
                  style={{
                    width: "90%",
                    height: "20vh",
                    padding: "6px",
                    borderRadius: "11px",
                  }}
                  src={product.img}
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
                    className={`${disable ? "add_to_cart_btn" : "btn_disable"}`}
                  >
                    <LocalMallIcon />
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <Cart />
    </div>
  );
};

export default Products;
