import React from "react";
import "../assets/styles/dashboardLayoute.css";
const DashboardTitle = ({ name }) => {
  return (
    <div className="dashboard_menuTitle">
      <p>{name}</p>
    </div>
  );
};

export default DashboardTitle;
