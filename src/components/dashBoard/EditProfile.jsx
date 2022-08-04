import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../../assets/styles/editProfile.css";
import User from "../../assets/images/user_chat.jpg";
import { Grid } from "@mui/material";
import { useUserProfileEditMutation } from "../../redux/reduicers/editprofile";

const role = [
  "Admin",
  "CEO",
  "Manager",
  "Acountant",
  "USER",
  "Driver",
  "Security Guard",
  "Delivery Person",
];

const EditProfile = () => {
  const [images, setImages] = useState([]);
  const [userProfileEdit, {}] = useUserProfileEditMutation();
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList[0].file);
    setImages(imageList[0].file);
  };
  const email = "email@junaid";
  const name = "lllllllllllllllll";
  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("image", images);
    formData.append("name", name);
    formData.append("email", email);
    userProfileEdit(formData);
  };
  return (
    <div>
      <Grid container>
        <p
          style={{
            padding: "20px 10px",
            fontWeight: "700",
            fontSize: "18px",
            color: "#24262d",
          }}
        >
          Edit Profile
        </p>
        <Grid item xs={12} md={12}>
          <div className="edit_profile_container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "20%" }}>
                <p>Edit Picture</p>
              </div>
              <div style={{ width: "80%" }}>
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <div className="edit_profile_image_upload_content">
                        <button
                          className="edit_profile_image_upload"
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          <span
                            style={{ display: "block", marginBottom: "10px" }}
                          >
                            <CloudUploadIcon
                              style={{
                                fontSize: "30px",
                                lineHeight: "45px",
                                color: "#0e9f6e",
                                fontStyle: "italic",
                              }}
                            />
                          </span>
                          Click or Drop here
                          <span
                            style={{
                              display: "block",
                              marginTop: "7px",
                              fontStyle: "italic",
                              fontSize: "12px",
                              lineHeight: "18px",
                              color: "#9e9e9e",
                            }}
                          >
                            (Only *.jpeg and *.png images will be accepted)
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </ImageUploading>
                <div
                  style={{
                    marginTop: "15px",
                    marginLeft: "10px",
                    backgroundColor: "white",
                    maxWidth: "90px",
                    padding: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    style={{
                      width: "80%",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                    }}
                    src={User}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "20%" }}>
                <p>Edit Name</p>
              </div>
              <div style={{ width: "80%" }}>
                <input
                  style={{
                    width: "80%",
                    border: "none",
                    backgroundColor: "#F4F5F7",
                    padding: "13px 4px",
                    outline: "none",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderRadius: "4px",
                  }}
                  type="text"
                  defaultValue="admin"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "20%" }}>
                <p>Edit Email</p>
              </div>
              <div style={{ width: "80%" }}>
                <input
                  style={{
                    width: "80%",
                    border: "none",
                    backgroundColor: "#F4F5F7",
                    padding: "13px 4px",
                    outline: "none",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderRadius: "4px",
                  }}
                  type="text"
                  defaultValue="admin@gmail.com"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "20%" }}>
                <p>Edit Contact Number</p>
              </div>
              <div style={{ width: "80%" }}>
                <input
                  style={{
                    width: "80%",
                    border: "none",
                    backgroundColor: "#F4F5F7",
                    padding: "13px 4px",
                    outline: "none",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderRadius: "4px",
                  }}
                  type="text"
                  defaultValue="01634900664"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "20%" }}>
                <p>Your Role</p>
              </div>
              <div style={{ width: "80%" }}>
                <input
                  style={{
                    width: "80%",
                    border: "none",
                    backgroundColor: "#F4F5F7",
                    padding: "13px 4px",
                    outline: "none",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderRadius: "4px",
                  }}
                  type="text"
                  defaultValue="admin"
                />
              </div>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "30px",
              }}
            >
              <button
                onClick={handleSubmit}
                style={{
                  padding: "10px 30px",
                  backgroundColor: "#10B981",
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Update Profile
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditProfile;
