//imports
import React from "react";
//import router
import { Link } from "react-router-dom";
//import design
import "../style/app.css";
import "../style/headerMenu.css";
import "../style/toggle.css";


function Header(props) {


  function handleOnclickBurger(event) {
    event.preventDefault();
    document.getElementById("menu").className = "open";
  }
  function handleOnClickRemove (event){
    event.preventDefault();
    document.getElementById("menu").classList.remove("open");
  }


  return (

    <div id="header">

      <div id="titles">
        <div>
          <p>Shanti Mentec</p>
          <h2>Developpeuse Web</h2>
          <p>React, Node.js</p>
        </div>
        <div className="toggleburger">
          <label className="switchdkm">
            <input type="checkbox" id="darkModeToggle"  onChange={props.handleOnClickToogle}/>
            <span className="slider round"></span>
          </label>
          <div id="burger" onClick={(event) => handleOnclickBurger(event)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div>
        <nav id="menu">
          <ul>
            <li onClick={(event) => handleOnClickRemove(event)}> 
              <Link to="/about">Je suis </Link>
            </li>
            <li onClick={(event) => handleOnClickRemove(event)}>
              <Link to="/dev">une newbie </Link>
            </li>
            <li onClick={(event) => handleOnClickRemove(event)}>
              <Link to="/experience">expérimentée </Link>
            </li>
            <li onClick={(event) => handleOnClickRemove(event)}>
              <Link to="/life">dans la vie</Link>
            </li>
          </ul>
        </nav>
      </div>



    </div>
  );
}


export default Header;
