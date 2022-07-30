import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import "../assets/styles/dashBoardHome.css";
import LayersIcon from "@mui/icons-material/Layers";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CachedIcon from "@mui/icons-material/Cached";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DoneIcon from "@mui/icons-material/Done";
import Barchart from "./dashBoard/chart/Barchart";
import PieChart from "./dashBoard/chart/PieChart";
const DashBoardHome = () => {
  const { dark } = useSelector((state) => state.timeOut);
  return (
    <div className="dashboard_home_container">
      <div className="dashoboard_home_content">
        <p>Dashboard Overview</p>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={6} md={4}>
            <div
              style={{
                backgroundColor: "#0694A2",
                width: "100%",
                padding: "10px 20px",
                borderRadius: "3px",
                boxSizing: "border-box",
                color: "white",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <h2>
                <LayersIcon style={{ fontSize: "40px", lineHeight: "34px" }} />
              </h2>
              <p>Today Order</p>
              <h2 style={{ marginTop: "10px" }}>$3200</h2>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div
              style={{
                backgroundColor: "#3F83F8",
                width: "100%",
                textAlign: "center",
                padding: "10px 20px",
                borderRadius: "3px",
                boxSizing: "border-box",
                color: "white",
                cursor: "pointer",
              }}
            >
              <h2>
                <ShoppingCartIcon
                  style={{ fontSize: "40px", lineHeight: "34px" }}
                />
              </h2>
              <p>This Month</p>
              <h2 style={{ marginTop: "10px" }}>$15000</h2>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div
              style={{
                backgroundColor: "#0E9F6E",
                width: "100%",
                padding: "10px 20px",
                borderRadius: "3px",
                boxSizing: "border-box",
                color: "white",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <h2>
                <CreditCardIcon
                  style={{ fontSize: "40px", lineHeight: "34px" }}
                />
              </h2>
              <p>Total Order</p>
              <h2 style={{ marginTop: "10px" }}>$80000</h2>
            </div>
          </Grid>
        </Grid>
        <div style={{ marginTop: "27px", padding: "40px 5px" }}>
          <Grid container rowSpacing={2} columnSpacing={1}>
            <Grid item xs={6} md={3}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  padding: "10px ",
                  width: "100%",
                  borderRadius: "5px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50px",
                    width: "50px ",
                    borderRadius: "50%",
                    backgroundColor: "#FCD9BD",
                  }}
                >
                  <p style={{}}>
                    <ShoppingCartIcon style={{ color: "#D75523" }} />
                  </p>
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      color: "",
                      fontSize: "20px",
                      fontWeight: "500",
                      lineHeight: "28px",
                      fontFamily: "cursive",
                    }}
                  >
                    Total Order
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#4c4f52",
                      lineHeight: "24px",
                      fontFamily: "cursive",
                      marginTop: "7px",
                    }}
                  >
                    186
                  </p>
                </div>
              </div>
            </Grid>
            {/* 2 */}
            <Grid item xs={6} md={3}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  padding: "10px ",
                  width: "100%",
                  borderRadius: "5px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50px",
                    width: "50px ",
                    borderRadius: "50%",
                    backgroundColor: "#C3DDFD",
                  }}
                >
                  <p style={{}}>
                    <CachedIcon style={{ color: "#1C64F2" }} />
                  </p>
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      color: "",
                      fontSize: "20px",
                      fontWeight: "500",
                      lineHeight: "28px",
                      fontFamily: "cursive",
                    }}
                  >
                    Order Pending
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#4c4f52",
                      lineHeight: "24px",
                      fontFamily: "cursive",
                      marginTop: "7px",
                    }}
                  >
                    186
                  </p>
                </div>
              </div>
            </Grid>
            {/* 3 */}
            <Grid item xs={6} md={3}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  padding: "10px ",
                  width: "100%",
                  borderRadius: "5px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50px",
                    width: "50px ",
                    borderRadius: "50%",
                    backgroundColor: "#AFECEF",
                  }}
                >
                  <p style={{}}>
                    <LocalShippingIcon style={{ color: "#0E7B87" }} />
                  </p>
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      color: "",
                      fontSize: "20px",
                      fontWeight: "500",
                      lineHeight: "28px",
                      fontFamily: "cursive",
                    }}
                  >
                    Total Order
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#4c4f52",
                      lineHeight: "24px",
                      fontFamily: "cursive",
                      marginTop: "7px",
                    }}
                  >
                    186
                  </p>
                </div>
              </div>
            </Grid>
            {/* 4 */}
            <Grid item xs={6} md={3}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  padding: "10px ",
                  width: "100%",
                  borderRadius: "5px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50px",
                    width: "50px ",
                    borderRadius: "50%",
                    backgroundColor: "#BCF0DA",
                  }}
                >
                  <p style={{}}>
                    <DoneIcon style={{ color: "#0F805D" }} />
                  </p>
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      color: "",
                      fontSize: "20px",
                      fontWeight: "500",
                      lineHeight: "28px",
                      fontFamily: "cursive",
                    }}
                  >
                    Total Order
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#4c4f52",
                      lineHeight: "24px",
                      fontFamily: "cursive",
                      marginTop: "7px",
                    }}
                  >
                    186
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
          <div style={{ marginTop: "50px" }}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <div style={{ height: " 50vh" }}>
                  <h4
                    style={{
                      textAlign: "center",
                      margin: "10px 0px",
                      fontSize: "20px",
                      fontWeight: "600",
                      fontFamily: "monospace",
                    }}
                  >
                    Conversions This Year
                  </h4>
                  <Barchart />
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ height: " 50vh" }}>
                  <p
                    style={{
                      textAlign: "center",
                      margin: "10px 0px",
                      fontSize: "20px",
                      fontWeight: "600",
                      fontFamily: "monospace",
                    }}
                  >
                    Top Revenue Product
                  </p>
                  <PieChart />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
