import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../pages/products/Products";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "../redux/reduicers/auth/auth";
import { useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { fontFamily } from "@mui/system";
const Product = () => {
  const [reveiw, setReveiw] = useState(false);
  const { id } = useParams();
  console.log("type params is", typeof id);
  const result = products.find((item) => item.id === Number(id));
  console.log("result ", result);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [id]);
  console.log("hello user", user);
  const handleReview = () => {
    setReveiw((prev) => !prev);
  };
  return (
    <div style={{ padding: "40px 17px" }}>
      <h1>hello product id:{id}</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <div>
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src={result.img}
              alt=""
            />
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div style={{ textAlign: "center" }}>
            <h3>{result.name}</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>{result.price}</p>
              <p>{result.stock}</p>
              <p>{result.price}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              padding: "40px",
              boxSizing: "border-box",
              borderRadius: "7px",
            }}
          >
            <i
              style={{
                display: "block",
                marginBottom: "20px",
                letterSpacing: "8px",
                fontSize: "22px",
                fontFamily: "monospace",
                borderBottom: "2px solid gray",
                width: "80px",
              }}
            >
              Description
            </i>

            <p
              style={{
                fontFamily: "'Trebuchet MS', 'sans-serif'",
                fontWeight: "300",
              }}
            >
              The Doel Freedom A9 is a 14.1" laptop from Doel. It is the first
              laptop made in Bangladesh. The Doel Freedom A9 is powered by an
              AMD A9-9425 processor (1MB Cache, 3.10GHz up to 3.70GHz). The AMD
              A9-9425 is an entry-level chip from the Stoney-Ridge APU series
              for notebooks. It has a 100 MHz higher CPU clock speed (base and
              boost) as well as a marginally faster iGPU. It integrates two CPU
              cores (one Excavator module with 2 integers and an FP unit)
              clocked at 3.1 GHz to 3.7 GHz. It also includes a Radeon R5 GPU
              with 192 shaders at up to 900 MHz as well as a single-channel
              DDR4-2133 memory controller. The Doel Freedom A9 comes with 4GB
              DDR4 RAM and a 240GB SATAIII M.2 SSD. It is integrated with AMD
              Radeon R5 Graphics and has a 14.1-inch HD (1366x768) Matte
              LED-backlit display with 45% NTSC. This laptop runs on Windows 10
              operating system. The Doel Freedom A9 offers a 1-year warranty.
            </p>
          </div>
          {/* write review */}
          <div
            style={{
              padding: "15px 40px",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              marginTop: "17px",
              borderRadius: "7px",
            }}
          >
            <p
              style={{
                fontFamily: "'Trebuchet MS', 'sans-serif'",
                fontSize: "20px",
                fontWeight: "700",
                color: "#000000",
              }}
            >
              Reviews (0)
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "11px",
              }}
            >
              <i
                style={{
                  fontFamily: "'Trebuchet MS', 'sans-serif'",
                  fontWeight: "400",
                  fontSize: "15px",
                  color: "#666666",
                }}
              >
                Get specific details about this product from customers who own
                it.
              </i>
              <button
                onClick={handleReview}
                style={{
                  padding: "10px 20px",
                  border: "2px solid #2C3A96",
                  outlineStyle: "none",
                  backgroundColor: "white",
                  borderRadius: "7px",
                  fontFamily: "'Trebuchet MS', 'sans-serif'",
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Write a Review
              </button>
            </div>
            {/* review container */}
            {reveiw ? (
              <div>
                <h2>say hello</h2>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "50px 10px",
                }}
              >
                <div style={{ padding: "0px 0px" }}>
                  <p
                    style={{
                      padding: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#EAECF8",
                    }}
                  >
                    <AssignmentIcon
                      style={{ color: "#3749BB", fontSize: "60px" }}
                    />
                  </p>
                </div>
                <p
                  style={{
                    color: "#666666",
                    fontFamily: "'Trebuchet MS', 'sans-serif'",
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  This product has no reviews yet. Be the first one to write a
                  review.
                </p>
              </div>
            )}
          </div>
        </Grid>

        {/* releated products section */}
        <Grid item xs={12} md={4}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              dolores consequatur voluptate, ut illo enim pariatur veniam
              architecto nemo sequi!
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
