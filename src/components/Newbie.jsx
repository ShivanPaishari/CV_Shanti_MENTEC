import React from "react";
//modules
import techno from "../data/techno.json";
import TechnoCard from "./TechnoCard";
//design
import "../style/card.css";
import "../style/newbie.css";
import { useState } from "react";

function Newbie() {
  const [filteredState, setFilteredState] = useState();

  function handleChangeFront(event, techno) {
    setFilteredState("Front Office");
  }

  function handleChangeBack(event, techno) {
    setFilteredState("Back End");
  }

  function handleChangeOther(event, techno) {
    setFilteredState("Autres");
  }

  return (
    <div id="newbie">
      <aside>
        <div>
          <h3>Outils</h3>
          <ul onClick={(event) => handleChangeFront(event)}>Front Office</ul>
          <ul onClick={(event) => handleChangeBack(event)}>Back Office</ul>
          <ul onClick={(event) => handleChangeOther(event)}>Autres</ul>
        </div>
        <div>
          <h3>Projets</h3>
          <ul>Projet Wall King Art</ul>
          <ul>Projet Squizz</ul>
          <ul>Projet Sens Interdits</ul>
        </div>
      </aside>
      <main>
        {filteredState === undefined
          ? "Selectionnez une thématique"
          : techno
              .filter((item) => filteredState === item.technotype)
              .map((item) => <TechnoCard techno={item} />)}
      </main>
    </div>
  );
}

export default Newbie;
