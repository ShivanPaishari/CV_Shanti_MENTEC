import React from "react";
import { useState } from "react";
// data
import experiences from "../data/experiences.json";
// modules
import ExperienceCard from "./cards/ExperienceCard";
//design
import "../style/experiences.css";
import "../style/app.css";
import "../style/aside.css";
import "../style/reset.css";
import "../style/mainSetting.css";
import "../style/card.css";



function Experience(props) {

  const backgroundMode=props.backgroundMode;
  const [choosenXpState, setChoosenXpState] = useState();
  

  function handleChangeTitle(event) {
    setChoosenXpState(event.target.value);
  }
  function developContent() {
      return experiences
        .filter((experience) => choosenXpState === experience.job)
        .map(experience => <ExperienceCard experiences={experience} />)
    }


  return (

    <div className={"mainSetting " + (backgroundMode === 'light' ? 'light' : 'dark')} >
      <aside>
        <select id="selectXp" onChange={(event) => handleChangeTitle(event)}>
          <option value="">Tous les postes</option>
          {experiences.map((experience) => {
            return (
              <option key={experience.job} value={experience.job}>
                {experience.job + " chez " + experience.company}
              </option>
            );
          })}
        </select>
      </aside>
      <div className="cardNoGrid">
        {developContent()} 
      </div>
    </div>
  );
}


export default Experience;
