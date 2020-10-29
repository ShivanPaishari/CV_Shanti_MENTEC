import React from "react";
import { useState } from "react";
//modules
import QuotesModal from "../QuotesModal";
//design
import "../../style/card.css";
import { setColorCard } from "../../style/setColorCard.js";
import "../../style/app.css";
import "../../style/reset.css";


function ProjectCard(props) {

  const project = props.projects;
  const linkWKA = project.link;
  const [modal, setModal]= useState(false);
  const subject = "de projets"


  function link() {
    if (project.link !== undefined) {
      return (
        <a href={linkWKA} target="_blank" rel="noopener noreferrer">
          Voir le site
        </a>
      );
    }
  }
  function handleOnClickShowModal (){
    setModal(true);
  }
  function handleOnClickHideModal(){
    setModal(false);
  }


  return (

    <div className="card" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{project.title}</h2>
      <p className="links">{link()}</p>
      <div>
        <p className="internalLabel">{project.description} </p>
        <p className="internalLabel">{project.details} </p>
      </div>
      <div>
        <p onClick={handleOnClickShowModal} className="pointer">+ ajouter une carte</p>
        {modal === true ? 
            <div>
              <QuotesModal modal={modal} subject={subject} handleOnClickHideModal={handleOnClickHideModal}/>
            </div>
            :""}
      </div>
    </div>
 
  );
}


export default ProjectCard;
