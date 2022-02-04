import React from "react";
import AsideRow from "../../components/AsideRow";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="aside">
      <Link to="/">
        <AsideRow title="Home" />
      </Link>
      <Link to="/Explore">
        <AsideRow title="Explore" />
      </Link>

      <AsideRow title="Subscriptions" />
      <AsideRow title="Originals" />
      <AsideRow title="Youtube Music" />
      <AsideRow title="Library" />
      <AsideRow title="Downloads" />
    </div>
  );
};

export default Aside;
