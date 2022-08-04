import React from "react";
import { NavLink } from "react-router-dom";

const CollapsableSidebarMenu = ({ array }) => {
  return (
    <div>
      {array.map((arr, index) => (
        <div key={index}>
          <NavLink
            className={(navData) =>
              navData.isActive ? "activeSidrbarMenu" : "navlink"
            }
            style={{
              textDecoration: "none",
              display: "block",
              marginLeft: "10px",
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
