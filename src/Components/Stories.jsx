import React from "react";
import  {Avatar}  from "@material-ui/core";
import "./Stories.css";

const Stories = ({ image, photoUrl, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="stories">
      <Avatar src={photoUrl} className="story-avatar" />
      <h4>{title}</h4>
    </div>
  );
};

export default Stories;
