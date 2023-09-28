import React, { useState } from "react";
import classes from "./ChatRoom.module.css";
import ChatHeader from "../ChatHeader/Chatheader";
import ChatForm from "../ChatForm/ChatForm";
import ChatList from "../ChatList/ChatList";

const initMessages = [
  {
    sender: "user",
    message: {
      text: "Hello, how are you?",
      type: "text",
    },
  },
  {
    sender: "other",
    message: {
      text: "Hello, how are you?",
      type: "text",
    },
  },
];
const ChatRoom = ({ onClose, rtl }) => {
  const chatBubble = `${classes.chatBubble}  `;
  const [messages, setMessages] = useState(initMessages);
  const [direction, setDirection] = useState("ltr");

  const sendNewMessage = (message) => {
    setMessages([...messages, message]);
  };
  const changeDirection = () => {
    const dir = direction === "ltr" ? "rtl" : "ltr";
    setDirection(dir);
  };

  return (
    <div className={chatBubble} style={{ direction: direction }}>
      <ChatHeader onClose={onClose} onChangeDir={changeDirection} />
      <ChatList messages={messages} />
      <ChatForm onMessage={sendNewMessage} />
    </div>
  );
};

export default ChatRoom;
