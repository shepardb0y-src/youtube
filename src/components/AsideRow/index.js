import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const AsideRow = ({ title }) => {
  return (
    <div className="aside-row">
      <h6>{title}</h6>
    </div>
  );
};

export default AsideRow;
