import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../pages/products/Products";
import { Grid } from "@mui/material";
const Product = () => {
  const { id } = useParams();
  console.log("type params is", typeof id);
  const result = products.find((item) => item.id === Number(id));
  console.log("result ", result);
  return (
    <div>
      <h1>hello product id:{id}</h1>
      <Grid container>
        <Grid item sx={12} md={6}>
          <div>
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src={result.img}
              alt=""
            />
          </div>
        </Grid>
        <Grid item sx={12} md={6}></Grid>
      </Grid>
    </div>
  );
};

export default Product;
