import "./App.css";
import Nav from "./components/Nav";
import UserContext from "./contexts/Usercontext.js";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Header />
        <div className="App-2"></div>

        <Routes>
          <Route />
          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<Search />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
