import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import menuItems, { routes } from "../assets/data/menuItems";
import Products from "../pages/products/Products";
const HomeRoutes = () => {
  const [component, setComponent] = useState(undefined);
  const [init, setInit] = useState("allProducts" || "");

  const handleLink = (e) => {
    setInit(e);
    const res = routes.map((item) => {
      if (item.name === e) {
        return setComponent(item.comp);
      }
    });
  };
  return (
    <div>
      <div className="home_menu_item">
        {menuItems.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => handleLink(item.to)}
              className="home_menu_items_link"
            >
              {item.name}
            </li>
          );
        })}
      </div>
      <div className="compnent_container">
        {component ? component : <Products />}
      </div>
    </div>
  );
};

export default HomeRoutes;
