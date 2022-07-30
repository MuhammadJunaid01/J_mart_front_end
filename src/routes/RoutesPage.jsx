import { useEffect } from "react";
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
const RoutesPage = () => {
  // const location = useLocation();
 
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
            <Route path="create_offer" element={<CreateOffer />} />
            <Route path="addproduct" element={<AddProducts />} />
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
                <CheckOut />
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
