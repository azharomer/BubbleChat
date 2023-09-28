import React from "react";
import classes from "./ChatList.module.css";
import Chat from "../Chat/Chat";

const ChatList = ({ messages }) => {
  return (
    <div className={classes.messagesWrapper}>
      {messages.map((message) => (
        <Chat
          key={Math.random().toString()}
          message={message.message}
          isUser={message.sender === "user" ? true : false}
        />
      ))}
    </div>
  );
};

export default ChatList;
