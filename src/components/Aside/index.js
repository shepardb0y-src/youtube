import React from "react";
import AsideRow from "../../components/AsideRow";

const Aside = () => {
  return (
    <div className="aside">
      <AsideRow title="Home" />
      <AsideRow title="Explore" />
      <AsideRow title="Subscriptions" />
      <AsideRow title="Originals" />
      <AsideRow title="Youtube Music" />
      <AsideRow title="Library" />
      <AsideRow title="Downloads" />
    </div>
  );
};

export default Aside;
