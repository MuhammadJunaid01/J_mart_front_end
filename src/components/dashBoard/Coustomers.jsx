import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
const Coustomers = () => {
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

  if (loading) {
    return <h1>Loading............</h1>;
  }

  return (
    <div>
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
