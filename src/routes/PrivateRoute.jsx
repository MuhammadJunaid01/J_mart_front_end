import React from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  const navigate = useNavigate();
  if (!user) {
    return navigate("/login");
  }
  return children;
};

export default PrivateRoute;
