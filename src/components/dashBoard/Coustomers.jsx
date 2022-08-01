import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
const Coustomers = () => {
  const { paginatedData } = useSelector((state) => state.paginate);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  // console.log("paginatedData from customer page", paginatedData);
  if (loading) {
    return <h1>Loading............</h1>;
  }

  return (
    <div>
      <div style={{ margin: "40px 0px" }}>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "27px",
            fontWeight: "700",
            color: "#24262d",
          }}
        >
          Customers
        </p>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            padding: "19px 4px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <input
              style={{
                width: "97%",
                boxSizing: "border-box",
                border: "none",
                padding: "12px 10px",
                margin: "0 auto",
                boxShadow:
                  " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                outline: "none",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="search by name/email or phone numaber"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "9px 10px",
          backgroundColor: "#F4F5F7",
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
        }}
      >
        <p style={{ fontSize: "15px", lineHeight: "18px", color: "#707275" }}>
          ID
        </p>
        <p style={{ fontSize: "15px", lineHeight: "18px", color: "#707275" }}>
          JOINING DATE
        </p>
        <p style={{ fontSize: "15px", lineHeight: "18px", color: "#707275" }}>
          NAME
        </p>
        <p style={{ fontSize: "15px", lineHeight: "18px", color: "#707275" }}>
          EMAIL
        </p>
        <p style={{ fontSize: "15px", lineHeight: "18px", color: "#707275" }}>
          PHONE
        </p>
        <p style={{ fontSize: "15px", lineHeight: "18px", color: "#707275" }}>
          ACTIONS
        </p>
      </div>

      <Pagination data={posts} itemsPerPage={7} />
      {/* {pageNumbers?.map((number, index) => {
        return (
          <div key={index}>
            <Pagination count={number} variant="outlined" />
          </div>
        );
      })} */}
    </div>
  );
};

export default Coustomers;
