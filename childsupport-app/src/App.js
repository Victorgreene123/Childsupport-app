import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/login" Component={Login} />
          <Route path="/about" Component={About} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
