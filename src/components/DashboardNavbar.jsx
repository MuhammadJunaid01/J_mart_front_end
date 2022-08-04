import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/dashboardNavbar.css";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import User from "../assets/images/user_chat.jpg";
import Switch from "@mui/material/Switch";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardToggle } from "../redux/reduicers/toggle/toggle";
import { Badge } from "@mui/material";
import DashboardProfileMenu from "./dashBoard/DashboardProfileMenu";
import DashboardNotification from "./nootification/DashboardNotification";
const DashboardNavbar = () => {
  const [profileMenuShow, setProfileMenuShow] = useState(false);
  const [showNotificatin, setShowNotificatin] = useState(false);
  const { user } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(dashboardToggle());
  };
  const handleClick = () => {
    setProfileMenuShow((prev) => !prev);
  };
  const handleNotification = () => {
    setShowNotificatin((prev) => !prev);
  };
  return (
    <div className="dashboard_navbar_conatiner">
      <div className="dasboard_navbar_logo">
        <i onClick={() => navigate("/")}>jmart</i>
      </div>
      <div className="dashboard_search_bar">
        <p>Dashboard</p>
        <input type="text" placeholder="Searche...." />
        <span>
          <SearchIcon style={{ fontSize: "28px" }} />
        </span>
      </div>
      <div className="dashoard_notification_profile">
        <p>
          <Badge badgeContent={20} color="secondary">
            <EmailIcon />
          </Badge>
        </p>
        <p onClick={handleNotification}>
          <Badge badgeContent={10} color="secondary">
            <NotificationsIcon />
          </Badge>
        </p>
        <p className="dashboard_setting_icon">
          <SettingsIcon style={{ fontSize: "30px" }} />
        </p>
        <img onClick={handleClick} src={user ? user.image : User} alt="" />
        <span>
          <Switch onClick={handleCheck} />
        </span>
      </div>
      <DashboardNotification showNotificatin={showNotificatin} />
      <DashboardProfileMenu profileMenuShow={profileMenuShow} />
    </div>
  );
};

export default DashboardNavbar;
