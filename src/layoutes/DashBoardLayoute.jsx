import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import { NavLink, Outlet, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ForumIcon from "@mui/icons-material/Forum";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import data from "../assets/data/data";
import "../assets/styles/dashboardLayoute.css";
import useAuth from "../hooks/useAuth";
import DashboardTitle from "../components/DashboardTitle";
import Sidebar from "../components/Sidebar";
import CollapsableSidebar from "../components/CollapsableSidebar";
const DashBoardLayoute = ({ children }) => {
  const { open } = useAuth();
  const [collapseSidebar, setCollapseSidebar] = useState(true);
  const collapse = () => {
    setCollapseSidebar((collapseSidebar) => !collapseSidebar);
    console.log("collapse", collapseSidebar);
  };
  return (
    <div>
      <div>
        <DashboardNavbar />
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <div className="dahboard_menu_bar">
              <DashboardTitle name={"menu"} />
              <Sidebar
                to={"profile"}
                name={"Dashboard"}
                count={"01"}
                Icon={HomeIcon}
              />
              <DashboardTitle name={"apps"} />
              <Sidebar to={"user"} name={"Calendar"} Icon={CalendarMonthIcon} />
              <Sidebar
                to={"chat"}
                name={"Chat"}
                Icon={ForumIcon}
                chat={"new"}
              />
              {/* start collapsable side bar */}
              <div
                onClick={collapse}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#B2B4B5",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p style={{ marginTop: "6px" }}>
                    <CreditCardIcon />
                  </p>
                  <p style={{ marginLeft: "6px" }}>Ecommerce</p>
                </div>
                <p>
                  {collapseSidebar ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardControlKeyIcon />
                  )}
                </p>
              </div>
              {collapseSidebar && <CollapsableSidebar array={data} />}
            </div>
            {/* end collapsable sidebar */}
          </Grid>
          <Outlet />
        </Grid>
      </div>
    </div>
  );
};

export default DashBoardLayoute;
