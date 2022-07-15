import { Grid } from "@mui/material";
import React, { useState } from "react";
import "../../assets/styles/checkout.css";
import Register from "../../pages/register/Register";
const CheckOut = ({ isCheckout }) => {
  const [login, setLogin] = useState(true);
  const [copun, setCopun] = useState(false);
  const handleLoginPerform = () => {
    setLogin((login) => !login);
  };
  const handleCopun = () => {
    setCopun((copun) => !copun);
  };
  return (
    <div className="check_out_container">
      <div className="check_out_header">
        <h1>Checkout</h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={11}>
          <div onClick={handleLoginPerform} className="returningLogin">
            <span>Returning customer? </span>
            <i>Click here to login</i>
          </div>
          <div>{login && <Register isCheckout={true} />}</div>
        </Grid>
        <Grid item xs={12} md={11}>
          <div onClick={handleCopun} className="returningLogin">
            <span>Have a coupon? </span>
            <i>Click here to login</i>
          </div>
          {copun && (
            <div
              style={{
                padding: "20px 0px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <i style={{ color: "gray", fontSize: "20px" }}>
                If you have a coupon code, please apply it below.
              </i>
              <br />
              <br />
              <form style={{ position: "relative" }}>
                <input
                  className="copun_apply_input"
                  placeholder=" coupon cod"
                  type="text"
                />
                <input
                  value="Apply"
                  type="submit"
                  className="copun_apply_button"
                />
              </form>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckOut;
