import React from "react";
import pageNotFound from "../../assets/images/pageNotFound.gif";
const Notfound = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <img src={pageNotFound} alt="pageNot Found" />
    </div>
  );
};

export default Notfound;
