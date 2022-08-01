import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Pagination } from "@mui/material";
const Coustomers = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFristPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexofFristPost, indexOfLastPost);

  const pageNumber = posts.length / postsPerPage;
  if (loading) {
    return <h1>Loading............</h1>;
  }
  const paginate = (event, value) => {
    console.log(value);
    setCurrentPage(value);
  };
  console.log(pageNumber);
  return (
    <div>
      {currentPost?.map((data, index) => {
        return (
          <div key={index}>
            <li style={{ marginTop: "7px" }}>{data.title}</li>
          </div>
        );
      })}
      <Pagination
        onChange={paginate}
        page={postsPerPage}
        count={pageNumber}
        variant="outlined"
      />

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
