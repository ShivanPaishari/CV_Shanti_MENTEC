import React from "react";

//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";
import "../style/smallcard.css";

function VolunteeringCard(props) {
  return (
    <div className="cardS" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{props.volunteering.organization}</h2>
      <div className="internalLabel">
        <h3>{props.volunteering.theme} </h3>
        <p>{props.volunteering.date} </p>
        <p>{props.volunteering.container} </p>
      </div>
      <div className="internalLabel">
        <p>{props.volunteering.title} </p>
      </div>
      <p> +Ajouter une carte</p>
    </div>
  );
}
export default VolunteeringCard;
