import React from "react";
import { useState } from "react";
//modules
import QuotesModal from "../QuotesModal";
//design
import { setColorCard } from "../../style/setColorCard.js";
import "../../style/card.css";
import "../../style/app.css";
import "../../style/reset.css";


function RecommendationCard(props) {

  const recommendation = props.recommendation;
  const [modal, setModal]= useState(false);
  const subject = "de recommandations";


  function handleOnClickShowModal (){
    setModal(true);
  }
  function handleOnClickHideModal(){
    setModal(false);
  }

  
  return (

    <div className="card" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{recommendation.name}</h2>
      <div className="internalLabel">
        <h4>{recommendation.job} </h4>
        <p>{recommendation.container} </p>
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


export default RecommendationCard;
