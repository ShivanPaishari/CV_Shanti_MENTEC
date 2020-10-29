import React from "react";
import {useState} from "react";
// modules
import QuotesModal from "../QuotesModal";
// design
import { setColorCard } from "../../style/setColorCard";
import "../../style/card.css";
import "../../style/app.css";
import "../../style/reset.css";


function ExperienceCard(props) {

  const experiences = props.experiences;
  const tasksList = experiences.tasks;
  const toolsList = experiences.tools;
  const [modal, setModal]= useState(false);
  const subject = "d'expériences"
  const task = tasksList.map((task) => {
    if (tasksList !== []) {
      return (
        <div>
          <p>{task.content}</p>
        </div>
      );
    }
  });
  const tool = toolsList.map((tool) => {
    return (
      <div>
        <p> {tool.content}</p>
      </div>
    );
  });
  

  function handleOnClickShowModal (){
    setModal(true);
  }
  function handleOnClickHideModal(){
    setModal(false);
  }


  return (

    <div className="card" style={{ backgroundColor: `${setColorCard()} ` }}>
      <h2>{experiences.job}</h2>
      <div className="internalLabel">
        <h3>{experiences.company}</h3>
        <p>{experiences.companyType}</p>
        <p>
          {experiences.startDate} - {experiences.endDate}
        </p>
        <p>{experiences.place}</p>
      </div>
      <p className="internalLabel">
        <span>Résumé de l'experience :</span> {experiences.resume}
      </p>
      <p className="internalLabel">
        <span>Tâches : {task}</span>
      </p>
      <p className="internalLabel">Outils :{tool}</p>
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


export default ExperienceCard;
