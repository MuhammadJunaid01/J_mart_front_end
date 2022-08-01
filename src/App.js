import React, { useEffect, useState } from "react";
import Context from "./hooks/Context";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesPage from "./routes/RoutesPage";
import {
  allUsers,
  getCurrentUser,
  useGetAllUsersQuery,
} from "./redux/reduicers/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  getBestSaleProducts,
  useGetBestSaleProductsQuery,
} from "./redux/reduicers/products/inedx";
import BestSale from "./components/BestSale";
import { useLocation } from "react-router-dom";
function App() {
  const history = createBrowserHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const dispatch = useDispatch();
  const { isValidate, user } = useSelector((state) => state.currentUser);
  const { data: bestSale } = useGetBestSaleProductsQuery();
  const { data, isLoading, isError } = useGetAllUsersQuery();
  useEffect(() => {
    if (!isValidate) {
      history.replace("/login");
      setIsLoggedIn(false);
    }
    dispatch(allUsers(data));
    dispatch(getBestSaleProducts(bestSale?.data));
    dispatch(getCurrentUser());
  }, [isLoggedIn, data, bestSale]);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Context>
        <RoutesPage />
      </Context>
    </div>
  );
}

export default App;
