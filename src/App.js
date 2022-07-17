import React from "react";
import Context from "./hooks/Context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesPage from "./routes/RoutesPage";

import "./App.css";
function App() {
  console.log("app rendering");
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
      {/* Same as */}
      <ToastContainer />

      <Context>
        <RoutesPage />
      </Context>
    </div>
  );
}

export default App;
