import React, { Profiler } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "../components/Chat";
import Dashboard from "../components/Dashboard";
import Menubar from "../components/Menubar";
import Profile from "../components/Profile";
import Users from "../components/Users";
import DashBoardLayoute from "../layoutes/DashBoardLayoute";
import HomeLayoute from "../layoutes/HomeLayoute";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
const RoutesPage = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayoute>
                <Home />
              </HomeLayoute>
            }
          />
          <Route
            path="/register"
            element={
              <HomeLayoute>
                <Register />
              </HomeLayoute>
            }
          />
          <Route path="dashboard" element={<DashBoardLayoute />}>
            <Route path="profile" element={<Profile />} />
            <Route path="user" element={<Users />} />
            <Route path="chat" element={<Chat />} />
          </Route>

          <Route
            path="/detail/:id"
            element={
              <HomeLayoute>
                <Detail />
              </HomeLayoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesPage;
