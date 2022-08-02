import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../../assets/styles/editProfile.css";
import { Grid } from "@mui/material";
const EditProfile = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
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
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditProfile;
