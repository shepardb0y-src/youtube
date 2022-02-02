import "./App.css";
import Nav from "./components/Nav";
import UserContext from "./contexts/Usercontext.js";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./components/Search";
import Aside from "./components/Aside";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Nav />
        <div className="App-2">
          <Aside />
        </div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="login" element={<Login setUser={setUser} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
