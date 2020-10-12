import React from "react";

//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";

function ProjectCard(props) {
  const project = props.projects;
  const linkWKA = project.link;
  console.log("props de project", linkWKA);

  function link() {
    if (project.link !== undefined) {
      return (
        <a href={linkWKA} target="_blank" rel="noopener noreferrer">
          Voir le site
        </a>
      );
    }
  }

  return (
    <div className="cardS" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{project.title}</h2>
      <p className="links">{link()}</p>
      <div>
        <p className="internalLabel">{project.description} </p>
        <p className="internalLabel">{project.details} </p>
      </div>
      <p> +Ajouter une carte</p>
    </div>
  );
}
export default ProjectCard;
