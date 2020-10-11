import React from "react";

//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";
import "../style/newbie.css";

function ProjectCard(props) {
  const projectProps = props.projects;
  const linkWKA = projectProps.link;
  console.log("props de project", linkWKA);

  function link() {
    if (projectProps.link != undefined) {
      return <a href={linkWKA}>Voir le site</a>;
    }
  }

  return (
    <div className="cardS" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{projectProps.title}</h2>
      <p className="links">{link()}</p>
      <div>
        <p className="internalLabel">{projectProps.description} </p>
        <p className="internalLabel">{projectProps.details} </p>
      </div>
      <p> +Ajouter une carte</p>
    </div>
  );
}
export default ProjectCard;
