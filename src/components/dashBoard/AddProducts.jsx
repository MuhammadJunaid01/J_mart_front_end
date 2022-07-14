import React, { useState } from "react";
import FileUpload from "react-material-file-upload";
import SaveIcon from "@mui/icons-material/Save";
import { Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { catagory } from "../../assets/data/catagory";
import axios from "axios";
import { useCreateOfferMutation } from "../../redux/reduicers/auth/auth";
import moment from "moment";
const AddProducts = ({ isOffer }) => {
  const [createOffer, { data, isLoading, error }] = useCreateOfferMutation();
  console.log("is offer", isOffer);
  const [expanded, setExpanded] = useState(true);
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [showProductBelow, setShowProductBelow] = useState(false);
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [productName, setProductName] = useState("");
  const [manufacturerBrand, setManufacturerBrand] = useState("");
  const [manufacturerName, setManufacturerName] = useState("");
  const [price, setPrice] = useState("");
  const [copunCode, setCopunCode] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [description, setDescription] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleExpand = () => {
    setExpanded((expanded) => !expanded);
  };
  const handleShow = () => {
    setShow((show) => !show);
  };
  const handleCategory = (name) => {
    setCategoryName(name);
  };
  const handleProductShow = () => {
    setShowProductBelow((prev) => !prev);
  };

  const handleImage = (e) => {
    setImage(e[0]);
    setPreviewImage(URL.createObjectURL(e[0]));
  };

  const sendDatabackend = () => {
    // for (const iterator of object) {
    // }
    const offer = isOffer ? true : false;
    const formData = new FormData();
    formData.append("categoryName", categoryName);
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("manufacturerBrand", manufacturerBrand);
    formData.append("image", image);
    formData.append("manufacturerName", manufacturerName);
    formData.append("description", description);
    formData.append("copunCode", copunCode);
    formData.append("expireDate", expireDate);
    formData.append("offer", offer);
    formData.append("percentage", percentage);
    console.log("offer is", offer);
    // createOffer(formData);
  };
  console.log("data", data);

  /// test moment data
  return (
    <div style={{ marginTop: "40px", paddingBottom: "20px" }}>
      <div>
        {isOffer ? <h4>create Offer</h4> : <h4>Add Product</h4>}

        {/* Same as */}
        {/* <ToastContainer /> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={11}>
            <div
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                padding: "20px",
                borderRadius: "4px",
              }}
            >
              <div
                onClick={handleExpand}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid gainsboro",
                  paddingBottom: "9px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      padding: "8px",
                      backgroundColor: "#D6DCF9",
                      color: "#8C73E8",
                      borderRadius: "49%",
                    }}
                  >
                    01
                  </p>
                  <div style={{ marginLeft: "8px" }}>
                    <p style={{ fontFamily: "IBM Plex Sans', sans-serif" }}>
                      Billing Info
                    </p>
                    <p style={{ marginTop: "4px" }}>
                      Fill all informatin below
                    </p>
                  </div>
                </div>
                <div>
                  {expanded ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowUpIcon />
                  )}
                </div>
              </div>
              {expanded && (
                <div style={{ marginTop: "20px" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <p style={{ marginBottom: "8px" }}>Product Name</p>
                      <input
                        onBlur={(e) => setProductName(e.target.value)}
                        style={{
                          outline: "none",
                          border: "1px solid gainsboro",
                          width: "100%",
                          padding: "9px 0px",
                          borderRadius: "3px",
                        }}
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <p style={{ marginBottom: "8px" }}>Manufacturer Name</p>
                      <input
                        onBlur={(e) => setManufacturerName(e.target.value)}
                        style={{
                          outline: "none",
                          border: "1px solid gainsboro",
                          width: "100%",
                          padding: "9px 0px",
                          borderRadius: "3px",
                        }}
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <p style={{ marginBottom: "8px" }}>Manufacturer Brand</p>
                      <input
                        onBlur={(e) => setManufacturerBrand(e.target.value)}
                        style={{
                          outline: "none",
                          border: "1px solid gainsboro",
                          width: "100%",
                          padding: "9px 0px",
                          borderRadius: "3px",
                        }}
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <p style={{ marginBottom: "8px" }}>Price</p>
                      <input
                        onBlur={(e) => setPrice(e.target.value)}
                        style={{
                          outline: "none",
                          border: "1px solid gainsboro",
                          width: "100%",
                          padding: "9px 0px",
                          borderRadius: "3px",
                        }}
                        type="text"
                      />
                    </Grid>
                    {isOffer ? (
                      <>
                        <Grid item xs={12} md={4}>
                          <p style={{ marginBottom: "8px" }}>copunCode</p>
                          <input
                            onBlur={(e) => setCopunCode(e.target.value)}
                            style={{
                              outline: "none",
                              border: "1px solid gainsboro",
                              width: "100%",
                              padding: "9px 0px",
                              borderRadius: "3px",
                            }}
                            type="text"
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <p style={{ marginBottom: "8px" }}>Expire Date</p>
                          <input
                            onBlur={(e) => setExpireDate(e.target.value)}
                            style={{
                              outline: "none",
                              border: "1px solid gainsboro",
                              width: "100%",
                              padding: "9px 0px",
                              borderRadius: "3px",
                            }}
                            type="text"
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <p style={{ marginBottom: "8px" }}>Percentage </p>
                          <input
                            onBlur={(e) => setPercentage(e.target.value)}
                            style={{
                              outline: "none",
                              border: "1px solid gainsboro",
                              width: "100%",
                              padding: "9px 0px",
                              borderRadius: "3px",
                            }}
                            type="text"
                          />
                        </Grid>
                      </>
                    ) : (
                      <div></div>
                    )}

                    <Grid item xs={12} md={12}>
                      <p style={{ marginBottom: "8px" }}>Category</p>
                      <div onClick={handleShow}>
                        <input
                          style={{
                            outline: "none",
                            border: "1px solid gainsboro",
                            width: "100%",
                            padding: "9px 7px",
                            borderRadius: "3px",
                            cursor: "pointer",
                          }}
                          type="text"
                          value={categoryName ? categoryName : "Select"}
                          disabled
                        />
                      </div>
                      {show && (
                        <div>
                          {catagory.map((name, index) => (
                            <div style={{ padding: "0px 5px" }} key={index}>
                              {/* this style write in  dashboard layoute css*/}
                              <div onClick={handleShow}>
                                <p
                                  onClick={() => handleCategory(name.name)}
                                  className="category"
                                >
                                  {name.name}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <p style={{ marginBottom: "8px" }}>Product Description</p>
                      <textarea
                        onBlur={(e) => setDescription(e.target.value)}
                        style={{
                          maxWidth: "100%",
                          minWidth: "100%",
                          minHeight: "60px",
                          maxHeight: "120px",
                          outline: "none",
                          border: "1px solid gainsboro",
                          width: "100%",
                          padding: "9px 0px",
                          borderRadius: "3px",
                          fontSize: "18px",
                          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        }}
                      ></textarea>
                    </Grid>
                  </Grid>
                </div>
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={11}>
            <div
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                padding: "20px",
                borderRadius: "4px",
              }}
            >
              <div
                onClick={handleProductShow}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      padding: "8px",
                      backgroundColor: "#D6DCF9",
                      color: "#8C73E8",
                      borderRadius: "49%",
                    }}
                  >
                    02
                  </p>
                  <div style={{ marginLeft: "8px" }}>
                    <p style={{ fontFamily: "IBM Plex Sans', sans-serif" }}>
                      Product Image
                    </p>
                    <p style={{ marginTop: "4px" }}>
                      Fill all informatin below
                    </p>
                  </div>
                </div>
                <div>
                  {showProductBelow ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowUpIcon />
                  )}
                </div>
              </div>
              <div>
                {showProductBelow && (
                  <Grid item xs={12} md={12}>
                    <div
                      style={{
                        border: "3px dotted #CED4DA",
                        marginTop: "17px",
                        padding: "20px 10px",
                        borderRadius: "7px",
                        textAlign: "center",
                      }}
                    >
                      {/* this style writte in dashboard layoute css file */}
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
                      <FileUpload onChange={handleImage} />
                      {/* <input onChange={handleImage} type="file" /> */}
                    </div>
                    <div style={{ marginTop: "10px", display: "flex" }}>
                      <button
                        style={{
                          backgroundColor: "#CF5A5A",
                          color: "white",
                          padding: "4px 20px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          border: "none",
                          borderRadius: "5px",
                        }}
                      >
                        <CancelIcon />
                        <span style={{ marginLeft: "7px" }}>Cancel</span>
                      </button>

                      <button
                        onClick={sendDatabackend}
                        style={{
                          backgroundColor: "#2CA67A",
                          color: "white",
                          padding: "4px 20px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          border: "none",
                          borderRadius: "5px",
                          marginLeft: "10px",
                        }}
                      >
                        <SaveIcon />
                        <span style={{ marginLeft: "7px" }}>
                          {isLoading ? "Loading....." : "Save"}
                        </span>
                      </button>
                    </div>
                  </Grid>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddProducts;
