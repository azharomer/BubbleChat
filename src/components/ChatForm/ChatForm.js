import React, { useEffect, useRef, useState } from "react";
import classes from "./ChatForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faImage } from "@fortawesome/free-regular-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
// import { AudioRecorder } from "react-audio-voice-recorder";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const ChatForm = ({ onMessage }) => {
  const [type, setType] = useState("text");
  const [inputValue, setInputValue] = useState("");
  const [fileInputValue, setFileInputValue] = useState(null);
  const [view, setView] = useState(true);
  const recorderControls = useAudioRecorder();
  const imageRef = useRef();

  useEffect(() => {
    if (!recorderControls.isRecording) return;
    setView(false);
  }, [recorderControls.isRecording]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setType("text");
  };

  const handleSendMessage = () => {
    if (inputValue.trim() || fileInputValue) {
      const message = {
        sender: "user",
        message: {
          text: inputValue.trim() || "Sent an image",
          type: type,
          url: fileInputValue,
        },
      };
      setInputValue("");
      setFileInputValue(null);
      setType("text");
      onMessage(message);
    }
  };

  const handleChange = (e) => {
    if (!e.target.files.length) return;
    setFileInputValue(URL.createObjectURL(e.target.files[0]));
    setType("image");
  };

  const handleEditImage = () => {
    imageRef.current.click();
  };
  const addAudioElement = (blob) => {
    setView(true);
    const url = URL.createObjectURL(blob);
    setFileInputValue(url);
    setType("voice");
  };

  return (
    <div className={classes.bubbleFooter}>
      <div className={classes.bubbleFooterContant}>
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          recorderControls={recorderControls}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
          //   onNotAllowedOrFound={(err) => console.table(err)}
          //   mediaRecorderOptions={{
          //     audioBitsPerSecond: 128000,
          //   }}
        />
        {view && (
          <>
            <input
              type="text"
              value={inputValue}
              className={classes.sendInput}
              placeholder="Type a message..."
              onChange={handleInputChange}
            />
            <button className={classes.sendBtn} onClick={handleSendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            <span className={classes.sendBtn} onClick={handleEditImage}>
              <input
                ref={imageRef}
                type="file"
                onChange={handleChange}
                className={classes.hidden}
              />
              <FontAwesomeIcon icon={faImage} />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatForm;
