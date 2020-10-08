//imports
import React from "react";
//import des composants
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
//import css
import "../style/app.css";

function GridLayout() {
  return (
    <div className="gridLayout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default GridLayout;
