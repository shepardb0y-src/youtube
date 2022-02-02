import "./App.css";
import Nav from "./components/Nav";
import UserContext from "./contexts/Usercontext.js";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./components/Search";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Nav />

        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="login" element={<Login />} />
          <Route path="Home" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
