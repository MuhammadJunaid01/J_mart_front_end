import React, { useState } from "react";
import "../../assets/styles/createOffer.css";
import DateAndTimePicker from "../DateAndTimePicker";
import AddProducts from "./AddProducts";

const CreateOffer = () => {
  const offer = true;

  return (
    <div className="">
      <DateAndTimePicker />
      <AddProducts isOffer={offer} />
    </div>
  );
};

export default CreateOffer;
