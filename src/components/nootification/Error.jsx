import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../assets/styles/error.css";
const Error = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      //   setShow(false);
    }, 9000);
  }, [show]);
  return (
    <div>
      {show && (
        <div className="error_container">
          <h1>hello Error</h1>
        </div>
      )}
    </div>
  );
};

export default Error;
