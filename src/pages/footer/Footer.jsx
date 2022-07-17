import React from "react";
import { Grid } from "@mui/material";
import "../../assets/styles/footer.css";
const Footer = () => {
  return (
    <div style={{ padding: "50px" }}>
      <Grid container>
        <Grid xs={12} md={2}>
          <h1>hello footer</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
