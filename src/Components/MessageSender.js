import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
const MessageSender = () => {
  const submitHandle = (e) => {
    e.preventDefault();
    setInput("");
    setPhotoUrl("");
  };
  const [input, setInput] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  return (
    <div className="message-sender">
      <div className="top-portion">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="message-input"
            placeholder={`What's on your mind?`}
          />
          <input
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="message-input"
            placeholder="Picture URl (Optional)"
          />
          <button className="submit-button" onClick={submitHandle}>
            Hidden Button
          </button>
        </form>
      </div>
      <div className="bottom-portion">
        <div className="option ">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Video</h3>
        </div>
        <div className="option ">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo</h3>
        </div>
        <div className="option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Smile</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
