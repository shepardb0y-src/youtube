import React from "react";
import { useState } from "react";

const Nav = () => {
  const [formValue, setFromValue] = useState("");

  const handlechange = (e) => {
    setFromValue(e.target.value);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="Search-bar">Search:</label>
        <input onChange={handechange} type="text" value={formValue} />
        <button type="submit">Click</button>
      </form>
    </div>
  );
};

export default Nav;
