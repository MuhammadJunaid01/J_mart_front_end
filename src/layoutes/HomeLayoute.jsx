import React from "react";
import Menubar from "../components/Menubar";
import Container from "@mui/material/Container";
import SliderBanner from "../components/SliderBanner";

const HomeLayoute = ({ children }) => {
  return (
    <div>
      <Menubar />
      <div style={{ marginTop: "10px" }}>{children}</div>
    </div>
  );
};

export default HomeLayoute;
