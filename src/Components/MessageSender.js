import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from "../firebase";
const MessageSender = () => {
  const [input, setInput] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const submitHandle = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: photoUrl,
    });
    setInput("");
    setPhotoUrl("");
  };

  return (
    <div className="message-sender">
      <div className="top-portion">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="message-input"
            placeholder={`What's on your mind?, ${user.displayName}`}
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
