import React from "react";
import "../assets/styles/dashboardNavbar.css";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import User from "../assets/images/user_chat.jpg";
const DashboardNavbar = () => {
  return (
    <div className="dashboard_navbar_conatiner">
      <div className="dasboard_navbar_logo">
        <i>jmart</i>
      </div>
      <div className="dashboard_search_bar">
        <p>Dashboard</p>
        <input type="text" placeholder="Searche here" />
        <span>
          <SearchIcon />
        </span>
      </div>
      <div className="dashoard_notification_profile">
        <p>
          <EmailIcon />
        </p>
        <p>
          <NotificationsIcon />
        </p>
        <p>
          <SettingsIcon />
        </p>
        <img src={User} alt="" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
