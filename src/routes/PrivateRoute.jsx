import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  if (!user) {
    // return navigate("/login");
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { from: location },
        }}
        replace
      />
    );
  }
  return children;
};

export default PrivateRoute;
