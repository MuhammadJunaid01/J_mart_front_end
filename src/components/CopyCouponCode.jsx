import React, { useState } from "react";
import useClipboard from "react-hook-clipboard";
import "../assets/styles/copyCopun.css";
const CopyToClipBoard = () => {
  const [clipboard, copyToClipboard] = useClipboard();
  const [clip, setClip] = useState("J_MART02");
  const [check, setCheck] = useState(false);
  const copy = () => {
    copyToClipboard(clip);
    setCheck(true);
  };
  return (
    <div>
      <div className="copy_coupon_container">
        <button className="copy_btn" onClick={copy}>
          {check ? "copied!" : "J_MART02"}
        </button>
        <p style={{ fontSize: "12px", color: "gray" }}>
          "This coupon will no longer be valid when it expires"
        </p>
      </div>
    </div>
  );
};

export default CopyToClipBoard;
