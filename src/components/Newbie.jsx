import React from "react";
import { useState } from "react";
// data
import techno from "../data/techno.json";
import projets from "../data/projets.json";
//i modules
import TechnoCard from "./cards/TechnoCard";
import ProjectCard from "./cards/ProjectCard";
//design
import "../style/app.css";
import "../style/aside.css";
import "../style/reset.css";
import "../style/mainSetting.css";


function Newbie() {

  const [filteredState, setFilteredState] = useState();

  
  function handleChangeTools(event) {
    setFilteredState("tools");
  }
  function handleChangeProjects(event) {
    setFilteredState("projects");
  }
  function selectedState() {
    if (filteredState === undefined) {
      return <p className="intro">Selectionnez une thématique</p>;
    } else if (filteredState === "tools") {
      return techno.map((item) => <TechnoCard techno={item} />);
    } else if (filteredState === "projects") {
      return projets.map((item) => <ProjectCard projects={item} />);
    }
  }


  return (

    <div className="mainSetting">
      <aside>
        <div>
          <h4 onClick={(event) => handleChangeTools(event)}>Outils</h4>
          <h4 onClick={(event) => handleChangeProjects(event)}>Projets</h4>
        </div>
      </aside>
      <div className="cards">
        {selectedState()}
      </div>
    </div>
  );
}


export default Newbie;
