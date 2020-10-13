import React from "react";

//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";
import "../style/smallcard.css";

function TrainingCard(props) {
  const training = props.training;
  console.log("trainign", training.container);
  //let details = {training.container.map((item)=> Object.key)}

  return (
    <div className="cardS" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{training.title}</h2>
      <div className="internalLabel">
        <h4>{training.school}</h4>
        <p>
          {training.startDate} - {training.endDate}
        </p>
        <p>{training.sort}</p>
      </div>
      <div className="internalLabel"></div>
      <p> +Ajouter une carte</p>
    </div>
  );
}
export default TrainingCard;
