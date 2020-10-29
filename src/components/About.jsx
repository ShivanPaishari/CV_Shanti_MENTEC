import React from "react";
import { useState } from "react";
// modules
import QuotesModal from "./QuotesModal";
// design
import "../style/card.css";
import "../style/app.css";
import "../style/modal.css";
import "../style/reset.css";
import "../style/mainSetting.css";
import { setColorCard } from "../style/setColorCard";


function About() {

  const [modal, setModal]= useState(false);
  const subject = "d'informations"


  function handleOnClickShowModal (){
    setModal(true);
  }
  function handleOnClickHideModal(){
    setModal(false);
  }


  return (

    <div className="mainSetting">
      <div
        className="card"
        id="resumecard"
        style={{ backgroundColor: `${setColorCard()} ` }}
      >
        <h2>About</h2>
        <div className="internalLabel">
          <p>
            Atypique. Cela fait peur ou au contraire cela rassure... De mon
            point de vue, un parcours alternatif est gage d’agilité et de force
            de résilience. Je vois chaque expérience comme un générateur de
            nouvelles capacités.
          </p>
          <p>
            J’ai eu l’opportunité d’acquérir de solides hard skills « on the fly
            » : gérer un projet d’agencement de bureau Agile, accompagner la
            synergie des équipes , organiser des événements,maintenir les
            équipements.
          </p>
          <p>
            J’ai catalysé les situations pour affiner mes soft skills : aiguiser
            mon intelligence émotionnelle, faire preuve d’efficacité
            opérationnelle, être réactive face aux situations, proposer des
            solutions créatives.
          </p>
          <p>
            Toutes ces compétences ont été engrangées dans différents cadres
            d’entreprises : start up, PME, grandes compagnies. Cela me confère
            une connaissance de différents fonctionnements, et me permet d’avoir
            un impact pertinent sur un spectre large de sujets.
          </p>
          <p>
            De toutes mes expériences, je retiens un point commun : la fluidité
            de communication est l’essence même de la relation à l’autre. Et par
            ruissellement, elle agit sur l’efficacité au travail et donc la
            satisfaction client.
          </p>
          <p>
            Plusieurs années à observer et faciliter le travail d'équipe en
            méthode Agile, m'ont poussé à m'impliquer encore plus dans les
            projets. C'est pourquoi j'ai choisi de suivre une formation de
            développeur à la Wild Code School. L'objectif à court terme de
            travailler en tant que Développeur REACT, puis d'accompagner avec
            connaissance et donc pertinence, les projets en mode Agile.
          </p>
          <p>
            Pour mon stage de janvier à mars 2021, et pour mon emploi par la
            suite, je recherche non pas d’une entreprise mais d’un allié avec
            qui réaliser un « échange de bons procédés ».
          </p>
          <p>
            Voilà pour la partie « workflow ». Cela ne dit pas assez qui je
            suis... Pour teaser nos futurs échanges, j’aimerais vous dire que ce
            qui me fait me lever le matin, c’est la perspective de partager une
            énergie positive, de prendre part à une synergie qui dynamise le
            quotidien, et de multiplier les occasions de découvrir des nouvelles
            vies.
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

      <div
        className="card"
        id="contactcard"
        style={{ backgroundColor: `${setColorCard()} ` }}
      >
        <h2>Contact</h2>
        <div className="internalLabel">
          <p>06.49.86.22.98</p>
          <p>ashanti.mentec@gmail.com</p>
          <p>25 rue Philippe de Lassalle - 69004 Lyon</p>
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


export default About;
