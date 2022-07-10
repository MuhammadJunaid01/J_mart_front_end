import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import { Outlet, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ForumIcon from "@mui/icons-material/Forum";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import EmailIcon from "@mui/icons-material/Email";
import data from "../assets/data/eCommerceMenuItem";
import "../assets/styles/dashboardLayoute.css";
import useAuth from "../hooks/useAuth";
import DashboardTitle from "../components/DashboardTitle";
import Sidebar from "../components/Sidebar";
import CollapsebleItems from "../components/CollapsebleItems";
import authenticationItem from "../assets/data/authenticationItem";
import emailItem from "../assets/data/email";
const DashBoardLayoute = () => {
  const { open } = useAuth();
  const [collapseSidebar, setCollapseSidebar] = useState(true);
  const [pagesSidebar, setPagesSidebar] = useState(true);
  const [emailBar, setEmailBar] = useState(true);
  const collapse = () => {
    setCollapseSidebar((collapseSidebar) => !collapseSidebar);
    console.log("collapse", collapseSidebar);
  };
  const pagessidebar = () => {
    setPagesSidebar((pagesSidebar) => !pagesSidebar);
  };
  const controlEmailBar = () => {
    setEmailBar((emailBar) => !emailBar);
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
                to={"home"}
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

              <CollapsebleItems
                TitleIcon={EmailIcon}
                collapseSidebar={emailBar}
                collapse={controlEmailBar}
                IconDown={KeyboardArrowDownIcon}
                IconUp={KeyboardControlKeyIcon}
                name={"Email"}
                menuItem={emailItem}
              />
              {/* start pages here */}
              <DashboardTitle name={"Pages"} />
              <CollapsebleItems
                TitleIcon={AccountCircleIcon}
                collapseSidebar={pagesSidebar}
                collapse={pagessidebar}
                IconDown={KeyboardArrowDownIcon}
                IconUp={KeyboardControlKeyIcon}
                name={"Authentication"}
                menuItem={authenticationItem}
              />
              {/* end  pages here */}
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <Outlet />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashBoardLayoute;
