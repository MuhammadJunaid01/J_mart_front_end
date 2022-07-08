import React, { useState } from "react";
import "../assets/styles/draweCart.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector, useDispatch } from "react-redux";
import { openDrawer } from "../redux/reduicers/drawer";
import Drawer from "rc-drawer";

import Cart from "./Cart";
const DrawerCart = () => {
  const dispatch = useDispatch();
  const { openDrawerBox } = useSelector((state) => state.draw);
  const handleDrawer = () => {
    // setOpenDrawer((prev) => !prev);
  };
  // console.log("open drawer", openDrawer);

  return (
    <div className="drawerContainer">
      {openDrawerBox ? (
        <div onClick={() => dispatch(openDrawer())}>
          <h1>
            <LocalMallIcon />
          </h1>
        </div>
      ) : (
        <div className="open_drawer" onClick={() => dispatch(openDrawer())}>
          <h1>helllo</h1>
          <Drawer>
            <h1>helll</h1>
          </Drawer>
        </div>
      )}
    </div>
  );
};

export default DrawerCart;
