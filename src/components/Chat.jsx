import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SendIcon from "@mui/icons-material/Send";
const Chat = () => {
  const socket = io("http://localhost:5000");

  const [msg, setMsg] = useState("");
  const [msgReceive, setMsgReceive] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      userID: 1234566,
      msg: msg,
    };
    socket.emit("message", message);
  };
  useEffect(() => {
    socket.on("send", (data) => {
      setMsgReceive(data.msg);
      console.log("hello use effect", data);
    });
  }, [socket]);
  return (
    <div
      style={{
        padding: "20px 10px",
        minHeight: "90vh",
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          padding: "10px 6px",
          borderRadius: "7px",
        }}
      >
        <h4>Junaid</h4>
        <p>
          <PersonPinIcon />
        </p>
      </div>
      {/* message body */}
      <div>
        <p>{msgReceive}</p>
      </div>

      <form
        style={{
          position: "absolute",
          bottom: "10px",
          width: "90%",
          overflow: "hidden",
        }}
        onSubmit={handleSubmit}
      >
        <input
          onBlur={(e) => setMsg(e.target.value)}
          style={{
            outline: "none",
            border: "1px solid gainsboro",
            width: "80%",
            padding: "9px 0px",
            borderRadius: "3px",
            height: "70px",
          }}
          type="text"
        />
        <button
          style={{
            color: "black",
            padding: "4px 0px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
          }}
          type="submit"
        >
          <SendIcon style={{ fontSize: "30px", marginTop: "127px" }} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
