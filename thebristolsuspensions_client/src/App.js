import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
// import './App.css';

import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Fringe } from "./components/Fringe";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router className="App">
      <NavBar />
      <Switch>
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
