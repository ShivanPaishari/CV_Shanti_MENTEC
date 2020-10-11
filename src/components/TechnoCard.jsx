import React from "react";

//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";
import "../style/newbie.css";

function TechnoCard(props) {
  const technoProps = props.techno;
  console.log("props de technocard", technoProps);

  const technoList = technoProps.techno;
  const techno = technoList.map((tech) => {
    if (technoList !== []) {
      return (
        <div>
          <p>{tech.content}</p>
        </div>
      );
    }
  });

  return (
    <div className="cardS" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{technoProps.technotype}</h2>
      <div>
        <p className="internalLabel">
          <span>{techno}</span>
        </p>
      </div>
      <p> +Ajouter une carte</p>
    </div>
  );
}

export default TechnoCard;
