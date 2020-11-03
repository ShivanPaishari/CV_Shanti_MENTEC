import React from "react";
import { useState } from "react";
// data
import volunteering from "../data/volunteering.json";
import recommendation from "../data/recommendations.json";
import training from "../data/training.json";
//import modules
import TrainingCard from "./cards/TrainingCard";
import RecommendationCard from "./cards/RecommendationCard";
import VolunteeringCard from "./cards/VolunteeringCard";
import MoreAboutMe from "./MoreAboutMe";
// design
import "../style/app.css";
import "../style/aside.css";
import "../style/reset.css";
import "../style/mainSetting.css";


function Life() {

  const [filteredState, setFilteredState] = useState();


  function handleChangeInitialTraining(event) {
    setFilteredState("initial");
  }
  function handleChangeContinuousTraining(event) {
    setFilteredState("continuous");
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
    } else if (filteredState === "initial") {
      return training
        .filter((forminit) => filteredState === forminit.type)
        .map((forminit) => <TrainingCard training={forminit} />);
    } else if (filteredState === "continuous") {
      return training
        .filter((formcont) => filteredState === formcont.type)
        .map((formcont) => <TrainingCard training={formcont} />);
    } else if (filteredState === "recommendation") {
      return recommendation.map((item) => (
        <RecommendationCard recommendation={item} />
      ));
    } else if (filteredState === "volunteering") {
      return volunteering.map((volunteer) => (
        <VolunteeringCard volunteering={volunteer} />
      ));
    } else if (filteredState === "more") {
      return <MoreAboutMe/>
    }
  }


  return (

    <div className="mainSetting">
      <aside>
        <div>
          <div id="training">
            <h4>Formations</h4>
            <div>
              <ul onClick={(event) => handleChangeInitialTraining(event)}>
                Initiales
              </ul>
              <ul onClick={(event) => handleChangeContinuousTraining(event)}>
                Continues
              </ul>
            </div>
          </div>
          <h4 onClick={(event) => handleChangeRecommendation(event)}>
            Recommandations
          </h4>
          <h4 onClick={(event) => handleChangeVolunteering(event)}>
            Bénévolat
          </h4>
          <h4 onClick={(event) => handleChangeMore(event)}>Mais encore...</h4>
        </div>
      </aside>
      <div className="cards">
        {selectedState()}
      </div>
    </div>
  );
}


export default Life;
