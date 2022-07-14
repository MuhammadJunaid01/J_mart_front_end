import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import "../assets/styles/dashboardNavbar.css";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import userImage from "../assets/images/user.jpg";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
const DashboardNavbar = () => {
  // const [open, setOpen] = useState(true);
  const { open, setOpen, check } = useAuth();
  return (
    <div className="dash_board_nvbar_container">
      <div className="tooltip">
        <Tooltip title={`${open ? "open menu" : "close menu"}`}>
          <span onClick={check} className="tooltipIcon">
            {open ? <DensityMediumIcon /> : <FormatAlignRightIcon />}
          </span>
        </Tooltip>
      </div>

      <span>
        {" "}
        <Link to={"/"}>
          <Typography
            variant="h6"
            noWrap
            component="p"
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
        </Link>
      </span>
      <div
        style={{
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100px",
          cursor: "pointer",
        }}
      >
        <img
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
          }}
          src={userImage}
          alt=""
        />
        <p>junaid</p>
      </div>
    </div>
  );
};

export default DashboardNavbar;
