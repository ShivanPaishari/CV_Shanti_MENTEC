//imports
import React from "react";
//import des composants
import Header from "./Header";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
//import css
import "../style/app.css";


function GridLayout() {

  return (
    <div>
      <div className="gridLayout">
        <Header />
        <MainContainer />
        <Footer />
      </div>
      <script src="src/js/menu.js"></script>
    </div>
  );
}


export default GridLayout;
