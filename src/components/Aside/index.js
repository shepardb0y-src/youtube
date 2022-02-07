import React from "react";
import AsideRow from "../../components/AsideRow";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="aside">
      <Link className="home-link" to="/">
        <AsideRow title="Home" />
      </Link>
      <Link className="explore-link" to="/Explore">
        <AsideRow title="Explore" />
      </Link>
      <Link className="title" to="/Error"></Link>
      <Link className="title" to="/Error">
        <AsideRow title="Subscriptions" />
      </Link>
      <Link className="title" to="/Error">
        <AsideRow title="Originals" />
      </Link>
      <Link className="title" to="/Error">
        <AsideRow title="Youtube Music" />
      </Link>
      <Link className="title" to="/Error">
        <AsideRow title="Library" />
      </Link>
      <Link className="title" to="/Error">
        <AsideRow title="Downloads" />
      </Link>
    </div>
  );
};

export default Aside;
