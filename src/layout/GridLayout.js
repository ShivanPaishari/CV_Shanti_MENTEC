//imports
import React from "react";

//import des composants
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
//import css
import "../style/app.css";
import "../style/header.css";

function GridLayout() {
  return (
    <div>
      <div className="gridLayout">
        <Header />
        <Main />
        <Footer />
      </div>
      <script src="src/js/menu.js"></script>
    </div>
  );
}

export default GridLayout;
