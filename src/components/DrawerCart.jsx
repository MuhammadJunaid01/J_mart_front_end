import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/draweCart.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector, useDispatch } from "react-redux";
import { openDrawer } from "../redux/reduicers/drawer";
import CloseIcon from "@mui/icons-material/Close";
import SweetPagination from "sweetpagination";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  decreseById,
  inceaseById,
  deleteById,
  getTotal,
} from "../redux/reduicers/cart/cart";

const DrawerCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { openDrawerBox } = useSelector((state) => state.draw);
  const { cartItems, quantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems?.map((item) => {
      return item?.Price * item?.quantity;
    });
    const totalPriceCount = total?.reduce((prev, next) => {
      return prev + next;
    }, 0);
    setTotalPrice(totalPriceCount);
    dispatch(getTotal());
  }, [cartItems, quantity]);
  return (
    <div>
      <div className="drawerContainer">
        <div
          onClick={() => dispatch(openDrawer())}
          className="shopping_cart_box"
        >
          <h1>
            <LocalMallIcon />
          </h1>
          <p>{cartItems?.length} items</p>

          <div className="total_price_short">
            {cartItems ? <p>${totalPrice}</p> : <p>0$</p>}
          </div>
        </div>
      </div>
      <div className={openDrawerBox ? "side-drawer open" : "side-drawer"}>
        <div>
          <div className="drawer_header">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ margin: "0px" }}>
                <LocalMallIcon />
              </h3>
              <p
                style={{
                  marginLeft: "6px",
                  fontSize: "25px",
                  marginBottom: "7px",
                  fontWeight: "500",
                  fontFamily: "cursive",
                }}
              >
                shopping cart
              </p>
            </div>

            <p
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(openDrawer())}
            >
              <CloseIcon />
            </p>
          </div>
          {cartItems?.length > 0 ? (
            <div className="drawer_body">
              {currentPageData?.map((items, i) => (
                <div key={i}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",

                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <img
                          style={{
                            height: "60px",
                            width: "60px",
                            borderRadius: "50%",
                          }}
                          src={items?.ProductImage}
                          alt=""
                        />
                      </div>
                      <div style={{ marginLeft: "7px" }}>
                        <p>{items?.ProductName}</p>
                        <p style={{ color: "gray" }}>
                          item price {items?.Price}
                        </p>
                        {items ? (
                          <h4>{items?.Price * items?.quantity}</h4>
                        ) : null}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <h4
                        onClick={() => dispatch(inceaseById(items?._id))}
                        style={{ cursor: "pointer", marginRight: "6px" }}
                      >
                        <AddIcon />
                      </h4>
                      <p>{items?.quantity}</p>
                      <h4
                        onClick={() => dispatch(decreseById(items))}
                        style={{ cursor: "pointer", marginLeft: "6px" }}
                      >
                        <RemoveIcon />
                      </h4>
                    </div>
                    <div>
                      <h3
                        onClick={() => dispatch(deleteById(items))}
                        style={{ cursor: "pointer", color: "red" }}
                      >
                        <DeleteIcon />
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
              <SweetPagination
                currentPageData={setCurrentPageData}
                getData={cartItems}
                dataPerPage={3}
              />
            </div>
          ) : (
            <div className="empty_cart_container">
              <div className="empty_cart_bag">
                <h2>
                  <LocalMallIcon style={{ fontSize: "40px" }} />
                </h2>
              </div>
              <div
                style={{ marginTop: "14px", textAlign: "center" }}
                className="empty_cart_info"
              >
                <h4 style={{ color: "#464F5E", fontSize: "22px" }}>
                  Your cart is empty
                </h4>
                <p style={{ color: "#464F5E", marginTop: "6px" }}>
                  No items added in your cart. Please add product to your cart
                  list.
                </p>
              </div>
            </div>
          )}
          <div className="cart_footer">
            <div
              onClick={() => navigate("/checkout")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Proceed To Checkout</p>
              {totalPrice ? (
                <h3
                  style={{
                    backgroundColor: "white",
                    color: "#059669",
                    padding: "4px 9px",
                    borderRadius: "7px",
                  }}
                >
                  $ {totalPrice}
                </h3>
              ) : (
                <h3
                  style={{
                    backgroundColor: "white",
                    color: "#059669",
                    padding: "4px 9px",
                    borderRadius: "7px",
                  }}
                >
                  $ 0.00
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerCart;
