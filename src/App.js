import React, { useState } from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [chatopen, setChatopen] = useState(false);
  let hide = {
    display: "none",
  };
  let show = {
    display: "block",
  };
  let textRef = React.createRef();

  const toggle = (e) => {
    setChatopen(!chatopen);
  };
  return (
    <div id="chatCon">
      <div className="chat-box" style={chatopen ? show : hide}>
        <ChatRoom onClose={toggle} />
      </div>
      <div className="pop">
        <span onClick={toggle}>
          <FontAwesomeIcon icon={faComment} beat />
        </span>
      </div>
    </div>
  );
}

export default App;
