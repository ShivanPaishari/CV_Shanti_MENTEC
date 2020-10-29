import React from "react";
import { useState } from "react";
//modules
import QuotesModal from "../QuotesModal";
//design
import { setColorCard } from "../../style/setColorCard.js";
import "../../style/card.css";
import "../../style/app.css";
import "../../style/reset.css";


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

    <div className="cards">
      <div className="card" style={{ backgroundColor: `${setColorCard()} ` }}>
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
    </div>
  );
}


export default TrainingCard;
