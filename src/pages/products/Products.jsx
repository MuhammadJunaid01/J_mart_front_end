import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReactPaginate from "react-paginate";

import "../../assets/styles/products.css";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { addToCart } from "../../redux/reduicers/cart/cart";
import DrawerCart from "../../components/DrawerCart";
import { traking, getTrackerData } from "../../redux/reduicers/tracker";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  allProducts,
  useGetAllProductsQuery,
} from "../../redux/reduicers/products/inedx";
import Loader from "../../components/Loader";
import Chat from "../../components/Chat";
import { quickVeiw } from "../../redux/reduicers/quickVeiw/quickVeiw";
import QuickVeiw from "../../components/QuickVeiw";
import Pagination from "../../components/dashBoard/Pagination";
import "../../assets/styles/pagination.css";
const Products = () => {
  const { data, isError, isSuccess, isLoading } = useGetAllProductsQuery();
  const navigate = useNavigate();
  const { paginatedData } = useSelector((state) => state.paginate);
  const dispatch = useDispatch();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, pageCount, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.data.length;
    setItemOffset(newOffset);
  };

  const { quickVeiw: quick } = useSelector((state) => state.quickVeiw);

  const { products } = useSelector((state) => state.products);
  const { trackingData } = useSelector((state) => state.traker);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  useEffect(() => {
    if (data) {
      dispatch(allProducts(data.data));
    }
  }, [data]);
  const handleNavigate = (product) => {
    navigate(`/product/${product._id}`);
    dispatch(traking(product));
  };
  if (isLoading) {
    return <Loader />;
  }
  const handleQuickVeiw = (product) => {
    dispatch(quickVeiw(product));
  };
  return (
    <div className="products_container">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        {currentItems?.map((product, i) => (
          <Grid key={i} item xs={12} md={3}>
            <div className="products_card_container">
              <div
                className="products_card_image"
                onClick={() => handleNavigate(product)}
              >
                <img src={product?.ProductImage} alt="product image" />
              </div>
              <div className="products_card_info">
                <strong style={{ display: "block", textAlign: "center" }}>
                  {product?.Category}
                </strong>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "#000000",
                    lineHeight: "20px",
                    margin: "4px 0px",
                  }}
                >
                  {product?.ProductName?.slice(0, 25)}...
                </p>
                <strong>${product?.Price}</strong>
              </div>
              <div className="add_to_card_quick_view">
                <p onClick={() => handleAddToCart(product)}>
                  <ShoppingCartIcon style={{}} />
                </p>
                <p onClick={() => handleQuickVeiw(product)}>
                  <FitScreenIcon />
                </p>
              </div>
            </div>
          </Grid>
        ))}
        <br />
        <br />
        <div style={{ width: "100%" }}>
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
        <Grid item xs={12} md={6}>
          <QuickVeiw />
        </Grid>
      </Grid>

      <DrawerCart />
      <Chat />
    </div>
  );
};

export default Products;
