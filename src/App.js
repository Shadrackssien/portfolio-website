import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./Navigation/Nav";
import About from "./About/About";
import Skills from "./Skills/Skills"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
import "./App.css"
import Background from "./Background/Background";
import PlayerStats from "./playerStats/PlayerStats";
import {Helmet} from "react-helmet";

function App() {
  return <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Shadrack Essien</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
    </Helmet>
    <Router>
      <Nav />
      <Background />
      <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      <PlayerStats />
    </Router>
  </>
}

export default App;
