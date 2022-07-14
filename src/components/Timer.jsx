import React, { useEffect } from "react";
import { useState } from "react";
import { useTimer } from "react-timer-hook";
import "../assets/styles/timer.css";
import { timerHelper } from "../redux/helper/timerHelper";
const Timer = (props) => {
  console.log("count", props.arr[props.count]);
  const count = props.count;
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const myInterval = (payload) => {
    setInterval(() => {
      const data = timerHelper(payload);

      if (
        data?.days <= 0 ||
        data?.hours <= 0 ||
        (data?.minutes <= 0 && data.secounds <= 0)
      ) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        // console.log("expire data", data);
        return;
      }
      setDays(data?.days);
      setHours(data?.hours);
      setMinutes(data?.minutes);
      setSeconds(data?.secounds);
    }, 1000);
  };

  useEffect(() => {
    // console.log("hello timer", days, hours, minutes, secounds);
    myInterval(props?.data?.expireDate);
  }, [props?.data, seconds]);
  // console.log("props data", props.data);
  setTimeout(() => {
    if (minutes <= 0 && days <= 0 && hours <= 0 && seconds) {
      console.warn("hlllo", days);
    }
  }, 20000);
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
