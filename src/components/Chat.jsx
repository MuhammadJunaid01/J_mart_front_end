import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../assets/styles/chat.css";
import User from "../assets/images/user_chat.jpg";
const Chat = () => {
  const socket = io.connect("http://localhost:5000");
  const { isValidate, user } = useSelector((state) => state.currentUser);

  const [chatOPen, setChatOpen] = useState(false);
  const { users } = useSelector((state) => state.user);
  const [introduice, setIntroduice] = useState("");
  // const [user, setUser] = useState(undefined);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [admin, setAdmin] = useState(undefined);
  const handleChatOpen = () => {
    setChatOpen((prev) => !prev);
  };

  const registerUserSocket = () => {};

  useEffect(() => {
    socket.on("private", (data) => {
      const receive = [...messages];
      alert("");
      receive.push(data);
      setMessages(receive);

      console.log("message receive data ", data);
    });
  }, [messages, socket]);
  const sendMessage = () => {
    socket.emit("msg", {
      senderId: user._id,
      senderName: user.username,
      receiverId: admin._id,
      msg: msg,
    });
  };
  useEffect(() => {
    users?.forEach((user) => {
      if (user.isAdmin) {
        setAdmin(user);
      }
    });
  }, [users, admin, user]);
  const handleRegester = () => {
    socket.emit("user", user._id);
  };
  return (
    <div className="chat_container">
      <div onClick={handleChatOpen} className="chat_contaner_main">
        <span>Chat With jMart</span>

        <div onClick={handleRegester} className="chat_icon">
          <h1>
            <ChatBubbleIcon />
          </h1>
          <h2>
            <ModeEditIcon />
          </h2>
        </div>
      </div>
      {/*chat body  */}
      <div className={chatOPen ? "chat_body open" : "chat_body"}>
        <div className="chat_body_header">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              src={User}
              alt="user_logo"
            />
            <div style={{ marginLeft: "10px", color: "white" }}>
              <h4>Chat with </h4>
              <h4>jMart</h4>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="chat_notification">
              <h1
                style={{
                  color: "white",
                  cursor: "pointer",
                  padding: "0px",
                  margin: "0px",
                }}
              >
                <MoreVertIcon />
              </h1>
            </div>
            <h1
              style={{ cursor: "pointer", color: "white" }}
              onClick={handleChatOpen}
            >
              <KeyboardArrowDownIcon style={{ fontSize: "34px" }} />
            </h1>
          </div>
        </div>
        {/* message body */}
        {user ? <div></div> : <div> </div>}

        <div className="message_body">
          <h1>hello</h1>
          {messages.map((msg) => {
            return (
              <div>
                <p className={msg.from.isAdmin ? "chat_admin" : "chat_user"}>
                  {msg.msg}
                </p>
              </div>
            );
          })}
          <div className="write_message_input">
            <input
              onBlur={(e) => setMsg(e.target.value)}
              type="text"
              placeholder="Write Your Message::"
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
