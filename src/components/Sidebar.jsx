import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/dashboardLayoute.css";
const Sidebar = ({ to, name, count, Icon, chat }) => {
  return (
    <div>
      <div>
        <NavLink
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px",
            marginBottom: "10px",
          }}
          className={(navData) => (navData.isActive ? "active" : "navlink")}
          to={to}
          end
        >
          <p style={{ display: "flex", alignItems: "center" }}>
            <span>
              <Icon />
            </span>
            <span style={{ marginLeft: "5px" }}> {name}</span>
          </p>
          {count && (
            <p
              style={{
                padding: "3px 7px",
                backgroundColor: "#5B73E8",
                color: "white",
                borderRadius: "15px",
              }}
            >
              01
            </p>
          )}
          {chat && (
            <p
              style={{
                padding: "3px 7px",
                backgroundColor: "#F1B44C",
                color: "white",
                borderRadius: "15px",
              }}
            >
              {chat}
            </p>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
