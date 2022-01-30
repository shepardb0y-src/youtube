import React from "react";
import "./style.css";
import Search from "../../pages/Search";

const Nav = () => {
  return (
    <div id="navbar">
      <ul className="nav">
        <li className="nav-item">
          <img
            className="youtube-logo"
            src="https://cdn1.iconfinder.com/data/icons/follow-the-herd/512/youtube_right-512.png"
            alt=""
          />
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Search />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
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
