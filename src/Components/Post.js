import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

const Post = ({ profilePic, image, message, username, timestamp }) => {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={profilePic} className="post-avatar" />
        <div className="post-info">
          <h3>{username}</h3>
          <p>Timestamp....</p>
        </div>
      </div>
      <div className="post-bottom">
        <p>{message}</p>
      </div>
      <div className="post-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Post;
