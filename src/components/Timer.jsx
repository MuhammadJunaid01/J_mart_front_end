import React from "react";
import { useTimer } from "react-timer-hook";
import "../assets/styles/timer.css";
const Timer = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => alert("time ses"),
  });
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
