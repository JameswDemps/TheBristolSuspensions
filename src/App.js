import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { AboutUs } from "./components/About/AboutUs";
import { Members } from "./components/About/Members";
import { Alumni } from "./components/About/Alumni";
import { Fringe } from "./components/Fringe";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Router className="App">
      <NavBar />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/members">
          <Members />
        </Route>
        <Route path="/alumni">
          <Alumni />
        </Route>
        <Route path="/fringe">
          <Fringe />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
