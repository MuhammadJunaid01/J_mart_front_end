import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reduicers/cart/cart";
import { quickVeiw } from "../redux/reduicers/quickVeiw/quickVeiw";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const QuickVeiw = () => {
  const dispatch = useDispatch();
  const { quickVeiw: quick, product } = useSelector((state) => state.quickVeiw);
  return (
    <div>
      <div className={quick ? " quic_veiw_content open" : " quic_veiw_content"}>
        <div className="quic_veiw_close">
          <p onClick={() => dispatch(quickVeiw())}>X</p>
        </div>

        <div className="quick_veiw_container">
          <div className="quic_veiw_content_content">
            <img src={product?.ProductImage} alt="" />
          </div>

          <div className="quick_veiw_info">
            <p>{product?.ProductName}</p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                marginTop: "12px",
                lineHeight: "12px",
                color: "#919191",
              }}
            >
              <StarBorderIcon style={{ fontSize: "15px", color: "#9ac93c" }} />
              <StarBorderIcon style={{ fontSize: "15px", color: "#9ac93c" }} />
              <StarBorderIcon style={{ fontSize: "15px", color: "#9ac93c" }} />
              <StarBorderIcon style={{ fontSize: "15px", color: "#9ac93c" }} />
              <StarBorderIcon style={{ fontSize: "15px", color: "#9ac93c" }} />
              <span style={{ marginLeft: "5px" }}>
                {product?.reviews.length} reviews
              </span>
            </p>
            <p style={{ marginTop: "12px", fontSize: "14px" }}>
              Regular Price: ${product?.Price}
            </p>
            <button
              onClick={() => dispatch(addToCart(product))}
              style={{
                border: "none",
                marginTop: "33px",
                backgroundColor: "#9AC93C",
                color: "white",
                cursor: "pointer",
                padding: "5px 40px",
                fontSize: "17px",
                borderRadius: "3px",
              }}
            >
              Add to Cart
            </button>
            <p
              style={{
                color: "#212529",
                fontSize: "18px",
                margin: "12px 0px",
                lineHeight: "18px",
                fontWeight: "700",
              }}
            >
              Quick Overveiw
            </p>
            <p
              style={{
                fontFamily: "monospace",
                fontWeight: "600",
                fontSize: "16px",
                color: "#212529",
              }}
            >
              {product?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickVeiw;
