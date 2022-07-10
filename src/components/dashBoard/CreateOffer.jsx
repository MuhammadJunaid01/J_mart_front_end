import React, { useState } from "react";
import FileUpload from "react-material-file-upload";
import "../../assets/styles/createOffer.css";
import { Grid } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const CreateOffer = () => {
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [copunCode, setCopunCode] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const handleUploadImage = (e) => {
    setImage(e[0]);
    setPreviewImage(URL.createObjectURL(e[0]));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("expire date", expireDate);
    console.log("copun code ", copunCode);
    console.log("image", image);
    if (expireDate.length || copunCode.length === 0) {
      return alert("pl");
    }
  };
  return (
    <div className="create_offer_container">
      <h1>hello create offer</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={11}>
          <form>
            <input
              onBlur={(e) => setCopunCode(e.target.value)}
              style={{
                outline: "none",
                border: "1px solid gainsboro",
                width: "100%",
                padding: "9px ",
                borderRadius: "3px",
              }}
              type="text"
              placeholder="Copun Code"
            />
            <input
              onBlur={(e) => setExpireDate(e.target.value)}
              style={{
                outline: "none",
                border: "1px solid gainsboro",
                width: "100%",
                padding: "9px",
                borderRadius: "3px",
                marginTop: "6px",
              }}
              type="text"
              placeholder="Expire Date"
            />
          </form>
          <div style={{ margin: "6px 0px", width: "100%" }}>
            <button
              onClick={handleSubmit}
              style={{
                backgroundColor: "#2CA67A",
                color: "white",
                padding: "4px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                border: "none",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
            >
              <SaveIcon />
              <span style={{ marginLeft: "7px" }}>Save</span>
            </button>
          </div>
          {previewImage && (
            <div style={{ padding: "10px 0px" }}>
              <p style={{ padding: "7px 0px" }}>
                preview product image show before uiplod
              </p>
              <img
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                }}
                src={previewImage}
                alt=""
              />
            </div>
          )}
          <FileUpload onChange={handleUploadImage} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateOffer;
