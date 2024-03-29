import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AddProducts from "../components/dashBoard/AddProducts";
import CheckOut from "../components/dashBoard/CheckOut";
import Coustomers from "../components/dashBoard/Coustomers";
import CreateOffer from "../components/dashBoard/CreateOffer";
import DashBoardCart from "../components/dashBoard/DashBoardCart";
import DashBoardOrders from "../components/dashBoard/DashBoardOrders";
import DashBoardProducts from "../components/dashBoard/DashBoardProducts";
import DashBoardProductsDetails from "../components/dashBoard/DashBoardProductsDetails";
import EditProfile from "../components/dashBoard/EditProfile";
import Shops from "../components/dashBoard/Shops";
import DashBoardHome from "../components/DashBoardHome";
import Product from "../components/Product";
import Profile from "../components/Profile";
import Users from "../components/Users";
import DashBoardLayoute from "../layoutes/DashBoardLayoute";
import HomeLayoute from "../layoutes/HomeLayoute";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Notfound from "../pages/notFound/Notfound";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
const RoutesPage = () => {
  // const location = useLocation();
  // const { isValidate, user } = useSelector((state) => state.currentUser);
  const user = JSON.parse(localStorage.getItem("user"));

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
            <Route path="home" element={<DashBoardHome />} />
            <Route path="user" element={<Users />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="products" element={<DashBoardProducts />} />
            <Route
              path="productsDetail"
              element={<DashBoardProductsDetails />}
            />
            <Route path="orders" element={<DashBoardOrders />} />
            <Route path="customers" element={<Coustomers />} />
            <Route path="cart" element={<DashBoardCart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="shops" element={<Shops />} />
            <Route
              path="create_offer"
              element={
                <PrivateRoute user={user}>
                  <CreateOffer />
                </PrivateRoute>
              }
            />
            <Route
              path="addproduct"
              element={
                <PrivateRoute user={user}>
                  <AddProducts />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path="/detail/:id"
            element={
              <HomeLayoute>
                <Detail />
              </HomeLayoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <HomeLayoute>
                <PrivateRoute user={user}>
                  <CheckOut />
                </PrivateRoute>
              </HomeLayoute>
            }
          />
          <Route
            path="/login"
            element={
              <HomeLayoute>
                <Login />
              </HomeLayoute>
            }
          />

          <Route
            path="/account"
            element={
              <HomeLayoute>
                <Profile />
              </HomeLayoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <HomeLayoute>
                <Product />
              </HomeLayoute>
            }
          />

          <Route
            path="*"
            element={
              <HomeLayoute>
                <Notfound />
              </HomeLayoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesPage;
