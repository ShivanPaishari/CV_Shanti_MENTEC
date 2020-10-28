import React from "react";
import QuotesModal from "./QuotesModal";
import { useState } from "react";
//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";
import "../style/smallcard.css";
import "../style/app.css";


function TrainingCard(props) {
  const training = props.training;  
  const [modal, setModal]= useState(false);
  const subject = "de formations";


  function handleOnClickShowModal (){
    setModal(true);
  }
  function handleOnClickHideModal(){
    setModal(false);
  }

  
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
export default TrainingCard;
