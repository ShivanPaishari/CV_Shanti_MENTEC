import React from "react";

//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";

function RecommendationCard(props) {
  const recommendation = props.recommendation;

  return (
    <div className="cardS" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{recommendation.name}</h2>
      <div className="internalLabel">
        <p>{recommendation.job} </p>
        <p>{recommendation.container} </p>
      </div>
      <p> +Ajouter une carte</p>
    </div>
  );
}
export default RecommendationCard;
