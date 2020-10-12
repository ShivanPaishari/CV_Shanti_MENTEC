import React from "react";
import { useState } from "react";
// modules
import volunteering from "../data/volunteering.json";
import recommendation from "../data/recommendations.json";
import training from "../data/training.json";
import TrainingCard from "./TrainingCard";
import RecommendationCard from "./RecommendationCard";
import VolunteeringCard from "./VolunteeringCard";
// design
import "../style/card.css";
import "../style/smallcard.css";
import "../style/app.css";

function Life() {
  const [filteredState, setFilteredState] = useState();

  function handleChangeTraining(event) {
    setFilteredState("training");
  }

  function handleChangeRecommendation(event) {
    setFilteredState("recommendation");
  }
  function handleChangeVolunteering(event) {
    setFilteredState("volunteering");
  }
  function handleChangeMore(event) {
    setFilteredState("more");
  }

  function selectedState() {
    if (filteredState === undefined) {
      return <p className="intro">Selectionnez une thématique</p>;
    } else if (filteredState === "training") {
      return training.map((item) => <TrainingCard training={item} />);
    } else if (filteredState === "recommendation") {
      return recommendation.map((item) => (
        <RecommendationCard recommendation={item} />
      ));
    } else if (filteredState === "volunteering") {
      return volunteering.map((elem) => (
        <VolunteeringCard volunteering={elem} />
      ));
    } else if (filteredState === "more") {
      return <p> need to be done</p>;
    }
  }

  return (
    <div className="internalmain">
      <aside>
        <div>
          <ul onClick={(event) => handleChangeTraining(event)}>Formation</ul>
          <ul onClick={(event) => handleChangeRecommendation(event)}>
            Recommandations
          </ul>
          <ul onClick={(event) => handleChangeVolunteering(event)}>
            Bénévolat
          </ul>
          <ul onClick={(event) => handleChangeMore(event)}>Mais encore...</ul>
        </div>
      </aside>
      <main>{selectedState()}</main>
    </div>
  );
}

export default Life;
