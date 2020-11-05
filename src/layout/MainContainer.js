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
import "../style/mainSetting.css";


function MainContainer(props) {
  const backgroundMode=props.backgroundMode;
  console.log("props de bacground mode dans maincontainer", props.backgroundMode)

  return (
    <div >
      <div >
        <Switch>
          <Route path="/about">
            <About backgroundMode={backgroundMode}/>
          </Route>
          <Route path="/dev">
            <Newbie backgroundMode={backgroundMode}/>
          </Route>
          <Route path="/experience">
            <Experience backgroundMode={backgroundMode}/>
          </Route>
          <Route path="/life">
            <Life backgroundMode={backgroundMode}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}


export default MainContainer;
