import React from "react";
import { useState } from "react";

//modules
import techno from "../data/techno.json";
import projets from "../data/projets.json";
import TechnoCard from "./TechnoCard";
import ProjectCard from "./ProjectCard";
//design
import "../style/card.css";
import "../style/newbie.css";

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
    <div id="newbie">
      <aside>
        <div>
          <h3 onClick={(event) => handleChangeTools(event)}>Outils</h3>
        </div>
        <div>
          <h3 onClick={(event) => handleChangeProjects(event)}>Projets</h3>
        </div>
      </aside>
      <main>{selectedState()}</main>
    </div>
  );
}

export default Newbie;
