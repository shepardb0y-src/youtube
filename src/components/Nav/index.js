import React from "react";
import { useState } from "react";

const Nav = () => {
  const [formValue, setFromValue] = useState("");

  const handleChange = (e) => {
    setFromValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="Search-bar">Search:</label>
        <input onChange={handleChange} type="text" value={formValue} />
        <button type="submit">Click</button>
      </form>
    </div>
  );
};

export default Nav;
