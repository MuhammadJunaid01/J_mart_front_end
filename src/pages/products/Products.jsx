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
const products = [
  { name: "fis", id: uuidv4(), img: productsImg1, stock: true, price: 20 },
  { name: "food", id: uuidv4(), img: productsImg2, stock: false, price: 27 },
  { name: "organic", id: uuidv4(), img: productsImg3, stock: true, price: 15 },
  { name: "orange", id: uuidv4(), img: productsImg1, stock: true, price: 40 },
  { name: "tomatto", id: uuidv4(), img: productsImg2, stock: true, price: 22 },
  { name: "lebo", id: uuidv4(), img: productsImg3, stock: true, price: 10 },
  { name: "komola", id: uuidv4(), img: productsImg1, stock: false, price: 20 },
];
const Products = () => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const { trackingData } = useSelector((state) => state.traker);
  const disepatch = useDispatch();
  const handleAddToCart = (item) => {
    disepatch(addToCart(item));
    disepatch(traking(item));
  };
  useEffect(() => {
    disepatch(getTrackerData());
  }, []);
  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} md={2}>
            <div
              style={{
                height: "13rem",
                border: "2px solid gray",
                cursor: "pointer",
              }}
            >
              <div
                onClick={() => handleNavigate(product.id)}
                style={{ width: "100%", position: "relative" }}
              >
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
      <DrawerCart />
    </div>
  );
};

export default Products;
