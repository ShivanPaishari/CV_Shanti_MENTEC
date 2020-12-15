import React from "react";
import {useState} from "react";
//import des composants
import Header from "./layout/Header";
import MainContainer from "./layout/MainContainer";
import Footer from "./layout/Footer";
//import css
import "./style/app.css";
import "./style/reset.css";
import "./style/toggle.css";




function App (props) {

  const [backgroundMode,setBackgroundMode] = useState("dark");


  function handleOnClickToogle (){  
    (backgroundMode === "dark"  ? setBackgroundMode("light"): setBackgroundMode("dark"));
  }



  return (
    <div className={(backgroundMode === 'light' ? 'light' : 'dark')}>
        <div>
          <Header backgroundMode={backgroundMode} handleOnClickToogle={handleOnClickToogle} handleOnClickTBurger={props.handleOnClickTBurger}/>
          <MainContainer backgroundMode={backgroundMode}/>
          <Footer />
        </div>
    </div>
  );
}


export default App;
