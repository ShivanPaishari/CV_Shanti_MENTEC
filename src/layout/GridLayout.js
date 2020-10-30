//imports
import React from "react";
//import des composants
import Header from "./Header";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
//import css
import "../style/app.css";
import "../style/toggle.css";



function GridLayout(props) {


  return (
    <div>
      <div id="gridLayout">
        <Header handleOnClickToogle ={props.handleOnClickToogle} handleOnClickTBurger={props.handleOnClickTBurger}/>
        <MainContainer />
        <Footer />
      </div>
    </div>
  );
}


export default GridLayout;
