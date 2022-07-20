import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "../../src/assets/styles/menubar.css";
import { Grid } from "@mui/material";
import { testmonalData } from "../assets/data/authenticationItem";
const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",

  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const menu = [
  { name: "Profile", to: "profile" },
  { name: "Account", to: "account" },
  { name: "Dashboard", to: "dashboard" },
  { name: "Logout", to: "logout" },
];
export default function Menubar() {
  const [showMenu, setShowMenu] = useState(false);
  const [topMenuBar, setTopMenuBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [menubarInputValue, setMenubarInputValue] = useState("");
  const [searchResult, setSearchReasult] = useState([]);
  const navigate = useNavigate();
  const handleOnclick = () => {
    setShowMenu((prev) => !prev);
  };
  let resizeWindow = () => {
    if (window.scrollY >= 300) {
      setTopMenuBar(true);
    } else {
      setTopMenuBar(false);
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("scroll", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
  }, [windowHeight]);

  const result = testmonalData.filter((item) => {
    if (menubarInputValue === "") {
      return;
    }
    return item.name.includes(menubarInputValue);
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ backgroundColor: "#10B981" }}
        position={topMenuBar ? "fixed" : "static"}
      >
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
            }}
          >
            JMART
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => setMenubarInputValue(e.target.value)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            onClick={handleOnclick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={`${showMenu ? "show_menu open" : "show_menu"}`}>
        {menu.map((item, index) => {
          return (
            <p
              key={index}
              onClick={() => {
                if (item.to === "logout") {
                  alert("logout");
                  return;
                }
                return navigate(item.to);
              }}
              className="menubar_menu"
            >
              {item.name}
            </p>
          );
        })}
      </div>
      {menubarInputValue && (
        <div className="search_result_show">
          {result.length === 0 && <p>opps! Please try again.</p>}
          <Grid container>
            {result.map((item, index) => {
              if (item) {
              }
              return (
                <Grid key={index} item xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      border: "1px solid gray",
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginTop: "6px",
                    }}
                  >
                    <div style={{ width: "50%" }}>
                      <p>{item.name}</p>
                    </div>
                    <img style={{ width: "80px" }} src={item.img} alt="" />
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </Box>
  );
}
