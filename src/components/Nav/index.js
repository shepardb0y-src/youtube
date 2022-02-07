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
  const [loading, setLoading] = useState(false);
  const user = useContext(Usercontext);
  const baseUrl = "https://youtube.googleapis.com/youtube/v3/search?";
  const apiKey = "&key=AIzaSyD_K3eN0gFLzZTGJrai_IPM8kJfG2e2hq0";
  const qparam = "&type=video&part=snippet&maxResults=";
  const maxResult = "12&q=";

  console.log("nav", user);
  const handleChange = (e) => {
    setFromValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
            setLoading(false);
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
          <Link to="/error">
            <VideocamOutlinedIcon />
            <AppsOutlinedIcon />
            <NotificationsActiveOutlinedIcon />
          </Link>
        </li>

        {!user ? (
          <li className="login">
            <Link className="login" to="login">
              Login
            </Link>
          </li>
        ) : (
          <li>Logout</li>
        )}
      </ul>
      <div className="test">
        <Aside />
        <div>
          {/* {loading ? (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt=""
        />
      ) : (
        <div id="nasa-container">
          {data.map((item) => {
            return <NASAData className="list" item={item} />;
          })} */}

          <div className="search-results">
            {loading ? (
              <img
                src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
                alt=""
              />
            ) : (
              videoArray.map((url) => {
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
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
