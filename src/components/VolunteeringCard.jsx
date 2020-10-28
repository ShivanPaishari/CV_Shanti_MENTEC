import React from "react";
import QuotesModal from "./QuotesModal";
import { useState } from "react";
//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";
import "../style/smallcard.css";
import "../style/app.css";


function VolunteeringCard(props) {
  const [modal, setModal]= useState(false);
  const subject = "de bénévolats";


  function handleOnClickShowModal (){
    setModal(true);
  }
  function handleOnClickHideModal(){
    setModal(false);
  }


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
