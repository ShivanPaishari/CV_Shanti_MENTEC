import React from "react";

//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";
import "../style/smallcard.css";
import "../style/app.css";


function TrainingCard(props) {
  const training = props.training;  

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
        <div className="internalLabel">
          {training.container.map (item=>(<p>{item.key}</p>))}
        </div>

      <p> +Ajouter une carte</p>
    </div>
  );
}
export default TrainingCard;
