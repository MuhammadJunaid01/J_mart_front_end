import React from "react";
import { Grid } from "@mui/material";
import "../../assets/styles/footer.css";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const footerMenuList = [
  "Laptops & Computers",
  "Cameras & Photography",
  "Smart Phones & Tablets",
  "Video Games & Consoles",
  "TV & Audio",
  "Gadgets",
  "Car Electronic & GPS,",
];
const customerCare = [
  "My Account",
  "Order Tracking",
  "Wish List",
  "Customer Service",
  "Returns / Exchange",
  "FAQs",
  "Product Support",
];
const Footer = () => {
  return (
    <div
      style={{
        padding: "50px 10px",
        backgroundColor: "rgba(173, 216, 230, 0.247)",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={1}></Grid>

        <Grid item xs={12} md={4}>
          <div className="footer_store_info">
            <div className="store_name">
              <p>mjmart</p>
            </div>
            <div className="call_us">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0px",
                  marginTop: "14px",
                }}
              >
                <h1>
                  <SupportAgentIcon
                    style={{ fontSize: "60px", color: "#333E48" }}
                  />
                </h1>
                <div style={{ marginLeft: "10px" }}>
                  <i
                    style={{
                      marginBottom: "6px",
                      display: "block",
                      color: "#333E48",
                    }}
                  >
                    Got questions? Call us 24/7!
                  </i>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      fontFamily: "monospace",
                      color: "#333E48",
                    }}
                  >
                    (+88)016349-900664
                  </p>
                </div>
              </div>

              <div style={{ padding: "10px 0px" }}>
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "cursive",
                    fontWeight: "500",
                    color: "#333E48",
                  }}
                >
                  Contact info
                </p>
                <i
                  style={{
                    fontSize: "15px",
                    fontFamily: "cursive",
                    fontWeight: "500",
                    color: "#333E48",
                    display: "block",
                    marginTop: "7px",
                  }}
                >
                  205 Khalil Road, Bhaddar Hat, Chittagong Bangladesh.
                </i>
              </div>
              <div className="social_icon">
                <div className="footer_icon">
                  <a
                    href="https://web.facebook.com/profile.php?id=100067866481382"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </div>
                <div className="footer_icon">
                  <a
                    href="https://twitter.com/MJunaid05176495"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                </div>
                <div className="footer_icon">
                  <a
                    href="https://www.gmail.com/m.junaidbkh2020@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoogleIcon />
                  </a>
                </div>
                <div className="footer_icon">
                  <a
                    href="https://github.com/MuhammadJunaid01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        {/* find and fast menu */}
        <Grid item xs={12} md={3}>
          <div style={{ marginLeft: "70px" }}>
            <h2>Find And Fast</h2>
            {footerMenuList.map((item, i) => {
              return (
                <div key={i}>
                  <i
                    style={{
                      cursor: "pointer",
                      display: "block",
                      marginTop: "5px",
                      fontFamily: "cursive",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#333E48",
                    }}
                  >
                    {item}
                  </i>
                </div>
              );
            })}
          </div>
        </Grid>

        {/* customer care */}
        <Grid item xs={12} md={1}></Grid>

        <Grid item xs={12} md={3}>
          <h2>customer Care</h2>
          {customerCare.map((item, i) => {
            return (
              <div key={i}>
                <i
                  style={{
                    cursor: "pointer",
                    display: "block",
                    marginTop: "5px",
                    fontFamily: "cursive",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#333E48",
                  }}
                >
                  {item}
                </i>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
