//imports
import React from "react";
//import router
import { Link } from "react-router-dom";
//import design
import "../style/app.css";
import "../style/headerMenu.css";
import "../style/toggle.css";


function Header(props) {


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

      <label className="switchdkm">
        <input type="checkbox" id="darkModeToggle" onClick={props.handleOnClickToogle}/>
        <span className="slider round"></span>
      </label>

    </div>
  );
}


export default Header;
