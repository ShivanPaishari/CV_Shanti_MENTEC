//imports
import React from "react";
import {useState} from "react";
//import des composants
import Header from "./Header";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
//import css
import "../style/app.css";
import "../style/toggle.css";



function GridLayout(props) {

  const [backgroundMode,setBackgroundMode] = useState("dark");


  function handleOnClickToogle (){  
    (backgroundMode === "dark"  ? setBackgroundMode("light"): setBackgroundMode("dark"));
  }
  console.log("background mode", backgroundMode);



  return (
    <div className={(backgroundMode === 'light' ? 'light' : 'dark')}>
        <div id="gridLayout">
          <Header handleOnClickToogle={handleOnClickToogle} handleOnClickTBurger={props.handleOnClickTBurger}/>
          <MainContainer backgroundMode={backgroundMode}/>
          <Footer />
        </div>
    </div>
  );
}


export default GridLayout;
