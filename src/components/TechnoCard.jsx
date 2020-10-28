import React from "react";
import QuotesModal from "./QuotesModal";
import { useState } from "react";

//design
import { setColorCard } from "../style/setColorCard.js";
import "../style/card.css";
import "../style/setColorCard.js";
import "../style/smallcard.css";
import "../style/app.css";


function TechnoCard(props) {
  const technoProps = props.techno;
  const technoList = technoProps.techno;
  const [modal, setModal]= useState(false);
  const subject = "de nouvelles connaissances techniques";
  const techno = technoList.map((tech) => {
    if (technoList !== []) {
      return (
        <div>
          <p>{tech.content}</p>
        </div>
      );
    }
  });


  function handleOnClickShowModal (){
    setModal(true);
  }
  function handleOnClickHideModal(){
    setModal(false);
  }

  
  return (
    <div className="cardS" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{technoProps.technotype}</h2>
      <div>
        <p className="internalLabel">
          <span>{techno}</span>
        </p>
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

export default TechnoCard;
