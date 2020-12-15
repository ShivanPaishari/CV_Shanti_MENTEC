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
import "../style/card.css";


function Newbie(props) {

  const backgroundMode=props.backgroundMode;
  const [filteredState, setFilteredState] = useState();

  
  function handleChangeTools(event) {
    setFilteredState("tools");
  }
  function handleChangeProjects(event) {
    setFilteredState("projects");
  }
  function selectedState() {
    if (filteredState === "tools") {
      return techno.map((item) => 
              <div>
                <TechnoCard techno={item} />
              </div>
      )           
    } else if (filteredState === "projects") {
        return projets.map((item) => 
                <div>
                  <ProjectCard projects={item} />
                </div>
        );
    }
  }


  return (

    <div className={"mainSetting " + (backgroundMode === 'light' ? 'light' : 'dark')} >
      <aside>
        <div>
          <h4 className="asideLink" onClick={(event) => handleChangeTools(event)}>Outils</h4>
          <h4 className="asideLink" onClick={(event) => handleChangeProjects(event)}>Projets</h4>
        </div>
      </aside>
      <div className="cards">
        {selectedState()}
      </div>
    </div>
  );
}


export default Newbie;
