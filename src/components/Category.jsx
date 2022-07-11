import React from "react";
import "../assets/styles/categorys.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../redux/reduicers/category";
import categoryMenu from "../assets/data/categoryMenu";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Category = () => {
  const { openCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const handleCategory = (e) => {
    console.log("hello handle", e);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="category_container">
        <div className="category_header">
          <h3 onClick={() => dispatch(category())}>
            {openCategory ? (
              <FormatListBulletedIcon />
            ) : (
              <FormatIndentDecreaseIcon />
            )}
          </h3>
          <h3>All categories</h3>
        </div>
        <div className={openCategory ? "open_category open" : "open_category"}>
          <div className="category_body">
            {categoryMenu.map((item, i) => (
              <div key={i}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    onClick={() => handleCategory(item.name)}
                    {...label}
                  />

                  <li className="category_menu_link">{item.name}</li>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
