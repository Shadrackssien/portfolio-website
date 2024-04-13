import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./Navigation/Nav";
import About from "./About/About";
import "./App.css"

function App() {
  return <>
    <Router>
      <Nav />
      <Routes>
      <Route path="/" element={About} />
      </Routes>
    </Router>
  </>
}

export default App;
