import React from "react";
import Menubar from "../components/Menubar";
import Container from "@mui/material/Container";
import SliderBanner from "../components/SliderBanner";
import Footer from "../pages/footer/Footer";

const HomeLayoute = ({ children }) => {
  return (
    <div>
      <Menubar />
      <div style={{ marginTop: "0px" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayoute;
