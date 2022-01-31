// import createCOntext
import React, { createContext } from "react";
//simplest way to create a context
//sp: name your context the same as your file
// made to stop prop drilling aka props.
// const Usercontext = createContext(null) is the non destructured way of a react hook
const Usercontext = createContext(null);

export default Usercontext;
