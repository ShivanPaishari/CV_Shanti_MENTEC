import React from "react";
import experiences from "../data/experiences.json";
import ExperienceCard from "./ExperienceCard";
import { useState } from "react";

function Experience() {
  console.log("json", experiences);

  const [choosenXpState, setChoosenXpState] = useState();

  function handleChangeTitle(event) {
    setChoosenXpState(event.target.value);
  }
  console.log("choosen experience state", choosenXpState);

  return (
    <div>
      <h3>Choisissez une expérience pour en connaitre les détails </h3>
      <label htmlFor="selectXp"> Expérience </label>
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
      {experiences
        .filter((experience) => choosenXpState === experience.job)
        .map((experience) => (
          <ExperienceCard experiences={experience} />
        ))}
    </div>
  );
}

export default Experience;
