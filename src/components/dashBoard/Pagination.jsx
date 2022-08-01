import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../../assets/styles/pagination.css";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { paginate } from "../../redux/reduicers/paginate";
import { Grid } from "@mui/material";
const Pagination = ({ data, itemsPerPage }) => {
  const dispatch = useDispatch();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));

    dispatch(paginate(currentItems));
  }, [itemOffset, itemsPerPage, pageCount]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <div style={{ width: "100%" }}>
      {currentItems?.map((user, index) => {
        return (
          <div key={index}>
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
              <p>{user.id}</p>
              <p>02/07/2022</p>
              <p>junaid</p>
              <p>m.junaidbkh2020@gmail.com</p>
              <p>01634900664</p>
              <p>action</p>
            </div>
          </div>
        );
      })}
      <Grid container>
        <Grid item xs={12} md={12}>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Pagination;
