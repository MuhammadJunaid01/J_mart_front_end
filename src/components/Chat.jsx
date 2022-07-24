import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SendIcon from "@mui/icons-material/Send";
import { getCurrentUser } from "../redux/reduicers/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/chat.css";
const Chat = () => {
  const socket = io("http://localhost:5000");
  const dispatch = useDispatch();
  const { isValidate, user } = useSelector((state) => state.currentUser);
  const [msg, setMsg] = useState("");
  const [users, setUsers] = useState([]);
  const [msgReceive, setMsgReceive] = useState([]);
  const [admin, setAdmin] = useState(undefined);
  const reciveMessage = [];
  const handleSubmit = (e) => {
    e.preventDefault();

    if (msg === "") {
      alert("please wrote somithing!");
      return;
    }
    const message = {
      to: admin,
      from: user,
      msg: msg,
    };
    socket.emit("message", message);
    setMsg("");
  };
  useEffect(() => {
    if (user) {
      socket.emit("add-user", user);
    }
    socket.on("users", (data) => {
      setUsers(data);
    });
    users.map((user) => {
      if (user.isAdmin) {
        setAdmin(user);
      }
    });
    socket.on("msgSend", (data) => {
      const admin = data.from.isAdmin ? true : false;

      reciveMessage.push({ admin, message: data.msg });
      setMsgReceive(reciveMessage);
    });
  }, [users.length, user, reciveMessage.length]);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  if (user === undefined) {
    return <h1>Loading...............</h1>;
  }

  console.log("msgReceive", msgReceive);
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
      <div style={{ width: "100%" }}>
        {msgReceive.map((data, index) => {
          console.log("hello dxata", data);
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p className={data.admin ? "admin_message" : "user_message"}>
                  {data.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <li>{user.username}</li>
            </div>
          );
        })}

      <div></div>

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
