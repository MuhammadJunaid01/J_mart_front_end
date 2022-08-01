import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../../assets/styles/pagination.css";
const Pagination = ({ data, itemsPerPage }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log("ending ofset", endOffset);
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
    console.log("currentItems", currentItems);
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    console.log("nrew ofswr", newOffset);
    setItemOffset(newOffset);
  };
  // console.log(data);
  return (
    <div>
      <div>
        {currentItems?.map((item) => {
          console.log("mapping item", item);
          return (
            <div>
              <p>{item.id}</p>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        previousLabel="Prev >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        nextLabel="next >"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-link"
        previousLinkClassName="page-num"
        nextClassName="nextPage"
        activeLinkClassName="activePaginate"
      />
    </div>
  );
};

export default Pagination;
