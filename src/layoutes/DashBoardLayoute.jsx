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
import CollapsableSidebarMenu from "../components/CollapsableSidebarMenu";
import CollapsebleItems from "../components/CollapsebleItems";
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

              <CollapsebleItems
                TitleIcon={CreditCardIcon}
                collapseSidebar={collapseSidebar}
                collapse={collapse}
                IconDown={KeyboardArrowDownIcon}
                IconUp={KeyboardControlKeyIcon}
                name={"Ecommerce"}
                menuItem={data}
              />

              {/* end collapsable sidebar */}
              {/* start pages here */}
              <DashboardTitle name={"Pages"} />

              {/* end  pages here */}
            </div>
          </Grid>
          <Outlet />
        </Grid>
      </div>
    </div>
  );
};

export default DashBoardLayoute;
