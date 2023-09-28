import React, { useRef, useState } from "react";
import classes from "./ChatHeader.module.css";
import logo from "./../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen, faGlobe } from "@fortawesome/free-solid-svg-icons";

const ChatHeader = ({ onChangeDir, onClose }) => {
  const [file, setFile] = useState();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(" chat Title");
  const imageRef = useRef();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChange = (e) => {
    if (!e.target.files.length) return;
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleCloseRoom = () => {
    onClose();
  };

  const handleEditImage = () => {
    imageRef.current.click();
  };

  const handleDirectionRoom = () => {
    onChangeDir();
  };
  return (
    <div className={classes.headerContainer}>
      <div className={classes.header}>
        <div className={classes.imgContainer}>
          <img src={file || logo} alt="" />
          <span className={classes.imgEdit} onClick={handleEditImage}>
            <input
              ref={imageRef}
              type="file"
              onChange={handleChange}
              className={classes.hidden}
            />
            <FontAwesomeIcon icon={faPen} />
          </span>
        </div>
        {!edit && (
          <div className={classes.title} onClick={() => setEdit(!edit)}>
            {title}
          </div>
        )}
        {edit && (
          <div>
            <input
              type="text"
              value={title}
              className={classes.inputHeader}
              placeholder="tile."
              onChange={handleTitleChange}
            />
            <button className={classes.editBtn} onClick={() => setEdit(!edit)}>
              <FontAwesomeIcon icon={faPen} />
            </button>
          </div>
        )}
      </div>
      <div className={classes.btnsHeader}>
        <button className={classes.closeBtn} onClick={handleDirectionRoom}>
          <FontAwesomeIcon icon={faGlobe} />
        </button>

        <button className={classes.closeBtn} onClick={handleCloseRoom}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
