import React from "react";
import "./style.css";
import Search from "../../pages/Search";
import MenuIcon from "@mui/icons-material/Menu";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const Nav = () => {
  return (
    <div id="navbar">
      <ul className="nav">
        <li className="nav-item">
          <MenuIcon />
          <img
            className="youtube-logo"
            src="https://cdn1.iconfinder.com/data/icons/follow-the-herd/512/youtube_right-512.png"
            alt=""
          />
        </li>
        <li className="nav-item">
          <Search />
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <VideocamOutlinedIcon />
            <AppsOutlinedIcon />
            <NotificationsActiveOutlinedIcon />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">login</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
