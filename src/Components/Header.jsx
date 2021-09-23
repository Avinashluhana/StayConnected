import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCirceIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="input-search">
          <SearchIcon />
          <input type="search" placeholder="Search" />
        </div>
      </div>

      <div className="header-center">
        <div className="options options--active">
          <HomeIcon fontSize="medium" />
        </div>
        <div className="options">
          <FlagIcon fontSize="medium" />
        </div>
        <div className="options">
          <SubscriptionsOutlinedIcon fontSize="medium" />
        </div>
        <div className="options">
          <StorefrontOutlinedIcon fontSize="medium" />
        </div>
        <div className="options">
          <SupervisedUserCirceIcon fontSize="medium" />
        </div>
      </div>

      <div className="header-right">
        <div className="information">
          <Avatar />
          <h4>Avinash kumar</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
