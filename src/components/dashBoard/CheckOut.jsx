import { Grid } from "@mui/material";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/styles/checkout.css";
import Register from "../../pages/register/Register";
import { getCurrentUser } from "../../redux/reduicers/auth/auth";
import { getTotal } from "../../redux/reduicers/cart/cart";
import jwt_decode from "jwt-decode";

import { useCreateOrderMutation } from "../../redux/reduicers/order";
const CheckOut = () => {
  const navigate = useNavigate();
  const { cartItems, quantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  const [createOrder, { data, isLoading, isSuccess, error }] =
    useCreateOrderMutation();
  const { isValidate, user } = useSelector((state) => state.currentUser);

  const [login, setLogin] = useState(false);
  const [copun, setCopun] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [success, setSuccess] = useState(true);
  const dispatch = useDispatch();

  const handleLoginPerform = () => {
    setLogin((login) => !login);
    setCopun(false);
  };
  const handleCopun = () => {
    setCopun((copun) => !copun);
    setLogin(false);
  };
  useEffect(() => {
    const total = cartItems?.map((item) => {
      return item?.Price * item?.quantity;
    });
    const totalPriceCount = total?.reduce((prev, next) => {
      return prev + next;
    }, 0);
    setTotalPrice(totalPriceCount);
    dispatch(getTotal());
    dispatch(getCurrentUser());
  }, [cartItems, quantity, totalAmount]);
  useEffect(() => {
    if (!isValidate) {
      navigate("/login");
    }

    const test = totalPrice / 100;
    const taxCoutn = test * 6;
    setTax(taxCoutn);
  }, [cartItems, quantity, totalPrice]);

  const handleSubmit = async () => {
    const data = {
      products: cartItems,
      amount: totalPrice,
      status: "proccessing",
      user: user.data.email,
      status: "proccessing",
      // orderBy: user._id,
    };
  };
  const makePayment = (token) => {
    const body = {
      token,
      products: cartItems,
      amount: totalPrice,
      status: "proccessing",
      user: user?.email,
    };
    createOrder(body);
  };
  useEffect(() => {
    if (data.message === "OK") {
      localStorage.removeItem("cartItems");
    }
  }, [data]);
  if (data) {
    console.log("data", data);
  }
  if (error) {
    console.log("errrrrrrrrrrr", error);
  }

  console.log("hello user", user);
  console.log("data", data);
  return (
    <div className="check_out_container">
      <div className="check_out_header">
        <h1>
          <i>Checkout</i>
        </h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={11}>
          <div onClick={handleLoginPerform} className="returningLogin">
            <span>Returning customer? </span>
            <i>Click here to login</i>
          </div>
          <div>
            {login && (
              <div>
                <h2>hello register</h2>
              </div>
            )}
          </div>
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
        <Grid item xs={12} md={6}>
          <div className="billing_detail_container">
            <div className="billing_details">
              <div className="checkout_header">
                <p>Billing details</p>
              </div>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div className="chekInput_name">
                  <p>First Name: </p>
                  <input className="checkout_input" type="text" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="chekInput_name">
                  <p>Last Name: </p>
                  <input className="checkout_input" type="text" />
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <div className="chekInput_name">
                  <p>Company Name (Optional) </p>
                  <input className="checkout_input" type="text" />
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <div className="chekInput_name">
                  <p>Street Address </p>
                  <input className="checkout_input" type="text" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="chekInput_name">
                  <p>City</p>
                  <input className="checkout_input" type="text" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="chekInput_name">
                  <p>Postcode/Zip </p>
                  <input className="checkout_input" type="text" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="chekInput_name">
                  <p>Postcode/Zip </p>
                  <input className="checkout_input" type="text" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="chekInput_name">
                  <p>Phone</p>
                  <input className="checkout_input" type="text" />
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <div className="chekInput_name">
                  <p>Order Notes (Optional)</p>
                  <textarea
                    style={{
                      maxWidth: "100%",
                      minWidth: "100%",
                      minHeight: "70px",
                      fontSize: "19px",
                      textAlign: "center",
                      maxHeight: "120px",
                      borderRadius: "20px",
                    }}
                    className="checkout_input"
                  ></textarea>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={1}></Grid>

        <Grid item xs={12} md={4}>
          <div className="check_out_order_container">
            <div className="order_header">
              <p>Your order</p>
            </div>
            <div className="order_history_total_amoutn">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  borderBottom: "1px solid grey",
                  paddingBottom: "7px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    Product
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    Total
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  borderBottom: "1px solid grey",
                  paddingBottom: "7px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    total Products {cartItems?.length}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    ${totalPrice}
                  </p>
                </div>
              </div>
              {/* shipping */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  borderBottom: "1px solid grey",
                  paddingBottom: "7px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    Shipping
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    $00.00
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  borderBottom: "1px solid grey",
                  paddingBottom: "7px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    Tax
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    ${tax.toFixed(2)}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  borderBottom: "1px solid grey",
                  paddingBottom: "7px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    Total
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    ${totalPrice + tax}
                  </p>
                </div>
              </div>
              <div style={{ padding: "20px 0px" }}>
                {user && (
                  <StripeCheckout
                    stripeKey="pk_test_51LNNMzC82usS9HEFIXxrDorMOsHdtpr624HEUfNrVmCoY0WwCkpae8b2kWYjOi2ysISzlUK5bvNIFCXczeO7hayP005H8TsmUz"
                    token={makePayment}
                    name="jMart"
                    amount={(totalPrice + tax) * 100}
                  >
                    <button
                      className={user ? "" : "user_undifined"}
                      style={{
                        padding: "16px",
                        width: "100%",
                        cursor: "pointer",
                        border: "none",
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "grey",
                        fontFamily: "monospace",
                        borderRadius: "50px",
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px 0px",
                      }}
                    >
                      Place order
                    </button>
                  </StripeCheckout>
                )}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckOut;
