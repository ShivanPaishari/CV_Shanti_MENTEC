import React from "react";
import { useState } from "react";
// data
import techno from "../data/techno.json";
import projets from "../data/projets.json";
//i modules
import TechnoCard from "./TechnoCard";
import ProjectCard from "./ProjectCard";
//design
import "../style/card.css";
import "../style/smallcard.css";
import "../style/app.css";


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

    <div className="internalmain">
      <aside>
        <div>
          <ul onClick={(event) => handleChangeTools(event)}>Outils</ul>
          <ul onClick={(event) => handleChangeProjects(event)}>Projets</ul>
        </div>
      </aside>
      <main>{selectedState()}</main>
    </div>
  );
}


export default Newbie;
