import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>heloo detail page{id}</h1>
    </div>
  );
};

export default Detail;
