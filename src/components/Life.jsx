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
import "../style/card.css";



function Life(props) {

  const backgroundMode=props.backgroundMode;
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
    if (filteredState === "initial") {
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
      return <MoreAboutMe backgroundMode={backgroundMode}/>
    }
  }


  return (

    <div className={"mainSetting" + " " + (backgroundMode === 'light' ? 'light' : 'dark')} >
      <aside>
        <div>
          <div id="training">
            <div className="asideLink">
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
          </div>
          <h4 className="asideLink" onClick={(event) => handleChangeRecommendation(event)}>
            Recommandations
          </h4>
          <h4 className="asideLink" onClick={(event) => handleChangeVolunteering(event)}>
            Bénévolat
          </h4>
          <h4 className="asideLink" onClick={(event) => handleChangeMore(event)}>Mais encore...</h4>
        </div>
      </aside>
      <div className="cards">
        {selectedState()}
      </div>
    </div>
  );
}


export default Life;
