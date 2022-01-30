import React from "react";
import "./style.css";
import Search from "../../pages/Search";
import Login from "../../pages/Login";
const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a
          className="nav-link active"
          aria-current="page"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1004px-Logo_of_YouTube_%282015-2017%29.svg.png"
        ></a>
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
        <a className="nav-link disabled">
          <Login />
        </a>
      </li>
    </ul>
  );
};

export default Nav;
