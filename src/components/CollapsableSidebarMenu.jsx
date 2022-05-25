import React from "react";
import { Link } from "react-router-dom";

const CollapsableSidebarMenu = ({ array }) => {
  return (
    <div>
      {array.map((arr, index) => (
        <div key={index}>
          <Link
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
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CollapsableSidebarMenu;
