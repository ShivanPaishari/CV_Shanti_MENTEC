import React from "react";
//data
import experiences from "../data/experiences.json";
//modules
import ExperienceCard from "./ExperienceCard";
import { useState } from "react";
//design
import "../style/experiences.css";
import "../style/app.css";

function Experience() {
  const [choosenXpState, setChoosenXpState] = useState();

  function handleChangeTitle(event) {
    setChoosenXpState(event.target.value);
  }
  //console.log("choosen experience state", choosenXpState);

  function developContent() {
    if (choosenXpState === undefined) {
      function animationframe() {
        requestAnimationFrame(animationframe);
      }
      requestAnimationFrame(animationframe);
      return (
        <div>
          <p className="intro">Choisissez une expérience pour en connaitre les détails</p>
          <div class="logoXp">
            <img
              src="https://ph-files.imgix.net/e9a58eea-1bb0-44ed-9a40-ff9934d6dfab?auto=format&auto=compress&codec=mozjpeg&cs=strip"
              alt="logo Gitbook"
            ></img>
            <img
              src="data:image/png;base64,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"
              alt="logo CosmoTech"
            ></img>
            <img
              src="data:image/png;base64,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"
              alt="logo Apple"
            ></img>
            <img
              src="data:image/jpeg;base64,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"
              alt="logo Artprice"
            ></img>
          </div>
        </div>
      );
    } else {
      return experiences
        .filter((experience) => choosenXpState === experience.job)
        .map((experience) => <ExperienceCard experiences={experience} />);
    }
  }

  return (
    <div className="internalmain">
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
      <main>{developContent()}</main>  
    </div>
  );
}

export default Experience;
