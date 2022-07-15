import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../assets/styles/timer.css";
import useAuth from "../hooks/useAuth";
import { timerHelper } from "../redux/helper/timerHelper";
import { useUpdateProductsMutation } from "../redux/reduicers/offer/offerSlice";
import { timeOutOffer } from "../redux/reduicers/toggle/toggle";
const Timer = (...props) => {
  const navigate = useNavigate();
  const [updateProducts, { data, isLoading, error }] =
    useUpdateProductsMutation();
  const { timeOut } = useSelector((state) => state.timeOut);
  const { date } = useAuth();
  const dispatch = useDispatch();
  const count = props.count;
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const myInterval = (payload) => {
    setInterval(() => {
      const data = timerHelper(payload);
      if (data.expire.length > 0) {
        data.expire.forEach((el) => {
          setTimeout(() => {
            updateProducts(el);
          }, 20000);
        });
      }
      if (
        data?.days <= 0 ||
        data?.hours <= 0 ||
        (data?.minutes <= 0 && data.secounds <= 0)
      ) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);

        return;
      }
      setDays(data?.days);
      setHours(data?.hours);
      setMinutes(data?.minutes);
      setSeconds(data?.secounds);
    }, 1000);
  };
  useEffect(() => {
    myInterval(props, dispatch, timeOutOffer, timeOut);
  }, [seconds]);
  return (
    <div
      onClick={() => navigate(`/product/${props[0]?.data._id}`)}
      style={{ width: "100%", padding: "0px" }}
    >
      <div>
        <div>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "19px",
              fontWeight: "600",
              color: "grey",
            }}
          >
            {seconds === 0 ? "" : "10 % Off"}
            {seconds === 0 ? (
              <i style={{ color: "red" }}>Date oute</i>
            ) : (
              <i style={{ marginLeft: "4px" }}>Active </i>
            )}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: "4",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "cursive",
              }}
            >
              Day {days}
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "cursive",
              }}
            >
              Hours {hours}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "5px",
              padding: "0px 9px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "cursive",
              }}
            >
              minutes {minutes}
            </p>

            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "cursive",
              }}
            >
              secounds <span>{seconds}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
