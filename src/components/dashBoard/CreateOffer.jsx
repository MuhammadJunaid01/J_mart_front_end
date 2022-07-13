import React, { useState } from "react";
import FileUpload from "react-material-file-upload";
import "../../assets/styles/createOffer.css";
import { Grid } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useCreateOfferMutation } from "../../redux/reduicers/auth/auth";
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
