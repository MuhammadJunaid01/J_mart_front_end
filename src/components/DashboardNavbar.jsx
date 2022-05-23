import { Grid, Typography } from "@mui/material";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import "../assets/styles/dashboardNavbar.css";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import userImage from "../assets/images/user.jpg";
const DashboardNavbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div className="tooltip">
        <Tooltip title="open menu">
          <span className="tooltipIcon">
            <DensityMediumIcon />
          </span>
        </Tooltip>
      </div>

      <span>
        {" "}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#45C438",
            textDecoration: "none",
          }}
        >
          JMART
        </Typography>
      </span>
      <img
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          backgroundSize: "cover",
        }}
        src={userImage}
        alt=""
      />
    </div>
  );
};

export default DashboardNavbar;
