import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const Nav = () => {
  return (
    <div id="navbar">
      <ul className="nav">
        <li className="nav-item">
          <MenuIcon />
          <Link to="/">
            <img
              className="youtube-logo"
              src="https://cdn1.iconfinder.com/data/icons/follow-the-herd/512/youtube_right-512.png"
              alt=""
            />
          </Link>
        </li>
        <li className="nav-item">
          <input type="text" />
          <SearchIcon />
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <VideocamOutlinedIcon />
            <AppsOutlinedIcon />
            <NotificationsActiveOutlinedIcon />
          </a>
        </li>

        <li>
          <Link to="login">login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
