//imports
import React from "react";
//import des composants
import Header from "./Header";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
//import css
import "../style/app.css";
import "../style/toggle.css";
import {GlobalStyles} from "../components/GlobalStyles";


function GridLayout(props) {


  return (
    <div>
              <GlobalStyles/>

      <div id="gridLayout">
        <Header handleOnClickToogle ={props.handleOnClickToogle}/>
        <MainContainer />
        <Footer />
      </div>
      <script src="src/js/menu.js"></script>
    </div>
  );
}


export default GridLayout;
