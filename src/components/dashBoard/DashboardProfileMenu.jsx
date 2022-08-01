import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/dashboardProfileMenu.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
const DashboardProfileMenu = ({ profileMenuShow }) => {
  const navigate = useNavigate();
  return (
    <div>
      {profileMenuShow ? (
        <div className="dashboard_profile_menu_container">
          <div
            onClick={() => navigate("/dashboard/home")}
            className="dashboard_profile_menu_content"
          >
            <p style={{ marginTop: "8px", marginRight: "10px" }}>
              <DashboardIcon style={{ fontSize: "19px" }} />
            </p>
            <p>Dashboard</p>
          </div>
          <div
            onClick={() => navigate("/dashboard/user")}
            className="dashboard_profile_menu_content"
          >
            <p style={{ marginTop: "8px", marginRight: "10px" }}>
              <SettingsIcon style={{ fontSize: "19px" }} />
            </p>
            <p>Edit Profile</p>
          </div>
          <div className="dashboard_profile_menu_content">
            <p style={{ marginTop: "8px", marginRight: "10px" }}>
              <LogoutIcon style={{ fontSize: "19px" }} />
            </p>
            <p>Log out</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DashboardProfileMenu;
