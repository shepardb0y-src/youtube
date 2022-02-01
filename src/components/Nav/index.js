import React from "react";
import { useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const Nav = () => {
  const [formValue, setFromValue] = useState("");
  const [videoArray, setVideoArray] = useState([]);

  const baseUrl = "https://youtube.googleapis.com/youtube/v3/search?";
  const apiKey = "&key=AIzaSyB5LRryc3dUt4OujKIXptSJcX46XTnUlvY";
  const qparam = "&type=video&part=snippet&maxResults=";
  const maxResult = "10&q=";

  const handleChange = (e) => {
    setFromValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");

    axios
      .get(`${baseUrl}${apiKey}${qparam}${maxResult} ${formValue}`)
      .then((videoArray) => {
        console.log(videoArray.data.items);
        const videoIdArray = videoArray.data.items.map(
          (v) => "https://www.youtube.com/embed/" + v.id.videoId
        );
        setVideoArray(videoIdArray);
        console.log(videoIdArray);
      })
      .catch((err) => console.error(err));
  };

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
          <form onSubmit={handleSubmit} action="">
            <label htmlFor="Search-bar">Search:</label>
            <input
              onChange={handleChange}
              type="text"
              value={formValue}
              className="input-srch"
            />
            <button type="submit">
              <SearchIcon />
            </button>
            <KeyboardVoiceOutlinedIcon />
          </form>
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
