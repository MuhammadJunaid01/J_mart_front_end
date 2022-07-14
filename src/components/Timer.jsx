import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTimer } from "react-timer-hook";
import "../assets/styles/timer.css";
import useAuth from "../hooks/useAuth";
import { timerHelper } from "../redux/helper/timerHelper";
import { useUpdateProductsMutation } from "../redux/reduicers/offer/offerSlice";
import { timeOutOffer } from "../redux/reduicers/toggle/toggle";
const Timer = (...props) => {
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
      // console.log("timer helper return data", data);
      if (data.expire.length > 0) {
        // console.log("expire data", data.expire);
        data.expire.forEach((el) => {
          // return console.log("hello element", el);
          // updateProducts(el);
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
        // for (const test of props.arr) {
        //   if (data.id === props.arr._id) {
        //     console.log("hello check");
        //   }
        // }
        return;
      }
      const l = hours % 2;

      // console.log("jkkkkkkkkkkkk", l);
      setDays(data?.days);
      setHours(data?.hours);
      setMinutes(data?.minutes);
      setSeconds(data?.secounds);
    }, 1000);
  };
  useEffect(() => {
    // console.log("hello timer", days, hours, minutes, secounds);
    myInterval(props, dispatch, timeOutOffer, timeOut);
  }, [seconds]);
  // console.log("props data", props.data);
  console.log("use context return date", date);
  return (
    <div style={{ width: "80%" }}>
      <div style={{ marginTop: "10px" }}>
        <div>
          <span className="timer">day{days}</span>
          <span
            style={{ fontSize: "30px", fontWeight: 600, margin: "0px 3px" }}
          >
            :
          </span>
          <span className="timer">hour{hours}</span>{" "}
          <span
            style={{ fontSize: "30px", fontWeight: 600, marginRight: "6px" }}
          >
            :
          </span>
          <span className="timer">min{minutes}</span>
          <span
            style={{ fontSize: "30px", fontWeight: 600, margin: "0px 3px" }}
          >
            :
          </span>
          <span className="timer">sec{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
