//imports
import React from "react";
//import router
import { Link } from "react-router-dom";
//import design
import "../style/app.css";

//import des composants

function Header() {
  return (
    <div id="header">
      <div>
        <p>Shanti Mentec</p>
        <h2>Developpeuse Web</h2>
        <p>React, Node.js</p>
      </div>
      <div>
        <nav>
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
    </div>
  );
}
export default Header;
