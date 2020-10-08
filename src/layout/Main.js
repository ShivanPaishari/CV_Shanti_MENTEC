//imports
import React from "react";
import { Switch, Route } from "react-router-dom";
//import des composants
import About from "../components/About";
import Newbie from "../components/Newbie";
import Experience from "../components/Experience";
import Life from "../components/Life";
//import css
import "../style/app.css";

function Main() {
  return (
    <div id="main">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dev">
          <Newbie />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/life">
          <Life />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
