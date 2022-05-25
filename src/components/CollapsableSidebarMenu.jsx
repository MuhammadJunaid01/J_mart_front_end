import React from "react";
import { NavLink } from "react-router-dom";

const CollapsableSidebarMenu = ({ array }) => {
  return (
    <div>
      {array.map((arr, index) => (
        <div key={index}>
          <NavLink
            className={(navData) =>
              navData.isActive ? "activeSidebarMnu" : "navlink"
            }
            style={{
              textDecoration: "none",
              display: "block",
              color: "#B2B4B5",
              marginLeft: "21px",
              marginBottom: "6px",
            }}
            to={arr.to}
          >
            {arr.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CollapsableSidebarMenu;
