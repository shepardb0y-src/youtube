import React from "react";
import { useState, useContext } from "react";
import "./style.css";
import Aside from "../../components/Aside";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import Usercontext from "../../contexts/Usercontext";

const Nav = () => {
  const [formValue, setFromValue] = useState("");
  const [videoArray, setVideoArray] = useState([]);
  const user = useContext(Usercontext);
  const baseUrl = "https://youtube.googleapis.com/youtube/v3/search?";
  const apiKey = "&key=AIzaSyBq_tTvCbp79dd8TA2k6LCdB5EAlvdomgk";
  const qparam = "&type=video&part=snippet&maxResults=";
  const maxResult = "12&q=";

  console.log("nav", user);
  const handleChange = (e) => {
    setFromValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    user
      ? axios
          .get(`${baseUrl}${apiKey}${qparam}${maxResult} ${formValue}`)
          .then((res) => {
            console.log(res.data.items);
            const videoIdArray = res.data.items.map(
              (v) => "https://www.youtube.com/embed/" + v.id.videoId
            );
            setVideoArray(videoIdArray);
          })
          .catch((err) => console.error(err))
      : null;
  };
  console.log(videoArray);
  // const handleClick = (e) => {

  // };
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
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="Search-bar"></label>
            <input
              onChange={handleChange}
              type="text"
              value={formValue}
              className="input-srch"
            />
            <button className="src-btn" type="submit">
              <SearchIcon />
            </button>
            <KeyboardVoiceOutlinedIcon />
          </form>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/error">
              <VideocamOutlinedIcon />
              <AppsOutlinedIcon />
              <NotificationsActiveOutlinedIcon />
            </Link>
          </a>
        </li>

        {!user ? (
          <li>
            <Link to="login">Login</Link>
          </li>
        ) : (
          <li>Logout</li>
        )}
      </ul>
      <div className="test">
        <Aside />
        <div>
          <div className="search-results">
            {videoArray.map((url) => {
              console.log(url);
              let iframe = (
                <div>
                  <iframe
                    width="360"
                    height="115"
                    src={url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
              return iframe;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
