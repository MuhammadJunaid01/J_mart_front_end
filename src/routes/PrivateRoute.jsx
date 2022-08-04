import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" replace />;
    //  navigate("/login");
  }
  return children;
};

export default PrivateRoute;
