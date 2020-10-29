import React from "react";
import { useState } from "react";
//modules
import QuotesModal from "../QuotesModal";
//design
import { setColorCard } from "../../style/setColorCard.js";
import "../../style/card.css";
import "../../style/app.css";
import "../../style/reset.css";


function VolunteeringCard(props) {

  const [modal, setModal]= useState(false);
  const linkWKA = props.volunteering.link;
  const subject = "de bénévolats";


  function link() {
    if (props.volunteering.link !== undefined) {
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
      <h2>{props.volunteering.organization}</h2>
      <p className="links">{link()}</p>
      <div className="internalLabel">
        <h3>{props.volunteering.theme} </h3>
        <p>{props.volunteering.date} </p>
        <p>{props.volunteering.container} </p>
      </div>
      <div className="internalLabel">
        <p>{props.volunteering.title} </p>
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


export default VolunteeringCard;
