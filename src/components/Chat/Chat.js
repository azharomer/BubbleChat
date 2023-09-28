import React from "react";
import classes from "./Chat.module.css";

const Chat = ({ message, isUser }) => {
  const className = isUser
    ? `${classes.bubble} ${classes.user}`
    : `${classes.bubble}`;

  return (
    <div className={className}>
      {message.type === "text" && message.text}
      {message.type === "image" && <img src={message.url} alt="" />}
      {message.type === "voice" && (
        <audio controls style={{ height: "35px" }}>
          <source src={message.url} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
};

export default Chat;
