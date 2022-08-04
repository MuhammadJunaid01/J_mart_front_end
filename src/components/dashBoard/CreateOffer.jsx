import React, { useState } from "react";
import "../../assets/styles/createOffer.css";
import AddProducts from "./AddProducts";

const CreateOffer = () => {
  const offer = true;

  return (
    <div className="">
      <AddProducts isOffer={offer} />
    </div>
  );
};

export default CreateOffer;
