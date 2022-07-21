import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "../redux/reduicers/auth/auth";
import { useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getTrackerData } from "../redux/reduicers/tracker";
import SweetPagination from "sweetpagination";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useForm } from "react-hook-form";

import {
  allProducts,
  useGetAllProductsQuery,
  useReviewProductsMutation,
} from "../redux/reduicers/products/inedx";
import Loader from "./Loader";
const Product = () => {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useGetAllProductsQuery();
  const { register, handleSubmit, reset } = useForm();
  const [reveiw, setReveiw] = useState(false);
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const [pageData, setPageData] = useState(new Array(2).fill());
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { trackingData } = useSelector((state) => state.traker);
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);
  const [
    reviewProducts,
    {
      data: reveiwData,
      isSuccess: reveiwsuccess,
      isLoading: reviewLoading,
      isError: reviewError,
    },
  ] = useReviewProductsMutation();
  const result = data?.data.find((item) => item._id === id);

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(allProducts);
  }, [id]);
  const handleReview = () => {
    setReveiw((prev) => !prev);
  };

  useEffect(() => {
    dispatch(getTrackerData());
    const relatedProducts = data?.data?.filter((item) => {
      return (
        item.Category === result.Category ||
        item.ManufacturerName === result.ManufacturerName ||
        item.stock === result.stock
      );
    });

    setRelatedProducts(relatedProducts);
  }, [id, data]);

  if (isLoading) {
    return <Loader />;
  }
  const handleReviewSubmit = (data) => {
    console.log(data.text);
    const body = {
      id: result._id,
      text: data.text,
    };
    reviewProducts(body);

    reset();
  };
  console.log("review data", result.reviews);
  return (
    <div style={{ padding: "40px 17px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <div>
            <img
              style={{ width: "70%", borderRadius: "10px" }}
              src={result?.ProductImage}
              alt=""
            />
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div
            style={{
              textAlign: "center",
              position: "relative",
              height: "300px",
              width: "100%",
            }}
          >
            <p
              style={{
                fontFamily: "cursive",
                fontWeight: "500",
                fontSize: "20px",
                color: "#808080",
              }}
            >
              {result?.ProductName}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <p
                style={{
                  backgroundColor: "#F5F5FC",
                  padding: "1px 10px",
                  border: "1px solid rgba(128, 128, 128, 0.534)",
                  borderRadius: "50px",
                }}
              >
                Price:
                <span
                  style={{
                    fontFamily: "'Trebuchet MS', 'sans-serif'",
                    color: "#000000",
                    lineHeight: "30px",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  {result?.Price}$
                </span>
              </p>

              {result?.stock && (
                <p
                  style={{
                    backgroundColor: "#F5F5FC",
                    padding: "1px 10px",
                    border: "1px solid rgba(128, 128, 128, 0.534)",
                    borderRadius: "50px",
                  }}
                >
                  Status:{" "}
                  <span
                    style={{
                      fontFamily: "'Trebuchet MS', 'sans-serif'",
                      color: "#000000",
                      lineHeight: "30px",
                      fontWeight: "700",
                      fontSize: "14px",
                    }}
                  >
                    In Stock
                  </span>
                </p>
              )}
              <p
                style={{
                  backgroundColor: "#F5F5FC",
                  padding: "1px 10px",
                  border: "1px solid rgba(128, 128, 128, 0.534)",
                  borderRadius: "50px",
                }}
              >
                Brand:
                <span
                  style={{
                    fontFamily: "'Trebuchet MS', 'sans-serif'",
                    color: "#000000",
                    lineHeight: "30px",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  {result?.ManufacturerName}
                </span>
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                display: "flex",
              }}
            >
              <div>
                <h3>
                  <RemoveIcon />
                </h3>
              </div>
              <p>0</p>
              <div>
                <h3>
                  <AddIcon />
                </h3>
              </div>

              <div>
                <button>
                  <LibraryAddIcon />
                </button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
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
              {result?.description}
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
              Reviews ({result?.reviews?.length})
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
            {reveiw && (
              <div>
                <h2>say hello</h2>
                <form onSubmit={handleSubmit(handleReviewSubmit)}>
                  <textarea
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
                    {...register("text", {
                      required: true,
                    })}
                  ></textarea>

                  <input
                    style={{
                      border: "none",
                      padding: "3px 20px",
                      borderRadius: "2px",
                      backgroundColor: "#10B981",
                      fontSize: "17px",
                      fontWeight: "400",
                      fontFamily: "cursive",
                      cursor: "pointer",
                    }}
                    type="submit"
                  />
                </form>
              </div>
            )}
            {result?.reviews?.length >= 0 ? (
              <div>
                {result.reviews?.map((item, index) => {
                  return (
                    <div key={index}>
                      <i
                        style={{
                          display: "block",
                          fontFamily: "'Trebuchet MS', 'sans-serif'",
                          fontWeight: "400",
                          fontSize: "17px",
                          color: "#666666",
                          marginBottom: "5px",
                        }}
                      >
                        {item.reveiw}
                      </i>
                    </div>
                  );
                })}
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
        <Grid item xs={12} md={3}>
          <div
            style={{
              width: "100%",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              padding: "20px 4px",
              borderRadius: "7px",
            }}
          >
            <h1
              style={{
                fontFamily: "'Trebuchet MS', 'sans-serif'",
                fontSize: "18px",
                lineHeight: "24px",
                fontWeight: "700",
                color: "#3749bbab",
                borderBottom: "1px solid gray",
                paddingBottom: "10px",
              }}
            >
              Realted Products
            </h1>
            {relatedProducts && (
              <div>
                {currentPageData?.map((item, index) => {
                  return (
                    <div
                      onClick={() => navigate(`/product/${item.id}`)}
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        borderBottom: "1px solid #ECEDEF",
                        padding: "8px 0px",
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <img
                          style={{ width: "80%", borderRadius: "7px" }}
                          src={item?.ProductImage}
                          alt=""
                        />
                      </div>
                      <div
                        style={{
                          width: "50%",
                        }}
                      >
                        <p style={{ marginBottom: "7px" }}>
                          {item?.ProductName}
                        </p>
                        <p style={{ marginBottom: "7px" }}>{item?.Price}</p>
                        <button
                          style={{
                            marginBottom: "7px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ShoppingCartIcon /> Add To Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
                <SweetPagination
                  currentPageData={setCurrentPageData}
                  getData={relatedProducts}
                  dataPerPage={2}
                />
              </div>
            )}

            {/* recently view */}
          </div>

          <div
            style={{
              marginTop: "10px",
              width: "100%",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              padding: "20px 4px",
              borderRadius: "7px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Trebuchet MS', 'sans-serif'",
                fontSize: "18px",
                lineHeight: "24px",
                fontWeight: "700",
                color: "#3749bbab",
                borderBottom: "1px solid gray",
                paddingBottom: "10px",
                marginBottom: "15px",
              }}
            >
              Recently Viewed
            </h3>
            {pageData?.map((item, index) => {
              return (
                <div key={index}>
                  <Grid container>
                    <Grid item xs={6} md={6}>
                      <img
                        style={{ width: "80%", borderRadius: "7px" }}
                        src={item?.ProductImage}
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <p>{item?.ProductName}</p>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
            <SweetPagination
              currentPageData={setPageData}
              getData={trackingData}
              dataPerPage={3}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
