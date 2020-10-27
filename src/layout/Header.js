//imports
import React from "react";
//import router
import { Link } from "react-router-dom";
//import design
import "../style/app.css";
import "../style/header.css";

function Header() {
  function handleOnclick(event) {
    event.preventDefault();
    document.getElementById("menu").className += "open";
  }

  return (
    <div id="header">
      <div id="titles">
        <p>Shanti Mentec</p>
        <h2>Developpeuse Web</h2>
        <p>React, Node.js</p>
        <div id="burger" onClick={(event) => handleOnclick(event)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div>
        <nav id="menu">
          <ul>
            <li>
              <Link to="/about">Je suis </Link>
            </li>
            <li>
              <Link to="/dev">une newbie </Link>
            </li>
            <li>
              <Link to="/experience">expérimentée </Link>
            </li>
            <li>
              <Link to="/life">dans la vie</Link>
            </li>
          </ul>
        </nav>
      </div>
      <script src="src/js/menu.js"></script>
    </div>
  );
}
export default Header;
