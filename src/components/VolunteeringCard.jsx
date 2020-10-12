import React from "react";

//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";

function VolunteeringCard(props) {
  const volunteering = props.Volunteering;

  return (
    <div className="cardS" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{volunteering.organization}</h2>
      <div className="internalLabel">
        <p>{volunteering.theme} </p>
        <p>{volunteering.date} </p>
        <p>{volunteering.container} </p>
      </div>
      <div className="internalLabel">
        <p>{volunteering.title} </p>
      </div>
      <p> +Ajouter une carte</p>
    </div>
  );
}
export default VolunteeringCard;
