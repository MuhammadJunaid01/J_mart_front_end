import React, { useEffect } from "react";
import { useState } from "react";
import { useTimer } from "react-timer-hook";
import "../assets/styles/timer.css";
import { timerHelper } from "../redux/helper/timerHelper";
const Timer = (props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const myInterval = (payload) => {
    setInterval(() => {
      const data = timerHelper(payload);
      setDays(data.days);
      setHours(data.hours);
      setMinutes(data.minutes);
      setSeconds(data.secounds);
    }, 1000);
  };

  useEffect(() => {
    // console.log("hello timer", days, hours, minutes, secounds);
    myInterval(props.data.expireDate);
  }, [props.data]);
  // console.log("props data", props.data);
  const {} = props.data;
  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginTop: "10px" }}>
        <div>
          <span className="timer">{days}</span>
          <span
            style={{ fontSize: "30px", fontWeight: 600, margin: "0px 3px" }}
          >
            :
          </span>
          <span className="timer">{hours}</span>{" "}
          <span
            style={{ fontSize: "30px", fontWeight: 600, marginRight: "6px" }}
          >
            :
          </span>
          <span className="timer">{minutes}</span>
          <span
            style={{ fontSize: "30px", fontWeight: 600, margin: "0px 3px" }}
          >
            :
          </span>
          <span className="timer">{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
