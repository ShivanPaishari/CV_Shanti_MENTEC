import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";
//import design
import "../style/modal.css";


function QuotesModal(props){

    const [quote, setQuote] = useState([]);
    const [quoteAuthor, setQuoteAuthor] = useState([]);
    const [authorNameResult, setAuthorNameResult] = useState();

    
    //recupération de l'API
    useEffect(() => {
      let configAPI = {
        method: 'GET',
        url: 'https://rapidapi.p.rapidapi.com/quotes/random/',
        params: {language_code: 'fr'},
        headers: {
          'x-rapidapi-host': 'quotes15.p.rapidapi.com',
          'x-rapidapi-key': 'f5a1bdf996msh199a1722b851809p1c307bjsn0804a45c21b8'
        }
      };

      axios.request(configAPI)
        .then((response) => {
          setQuote(response.data.content);
          setQuoteAuthor(response.data.originator)
        })
        .catch((error) => {
          console.log(error);
        });
      }, []);


    function handleOnClickAuthor () {
      console.log ("nom de l'auteur",quoteAuthor.name)
      setAuthorNameResult (true)
    }


    return(

      <div className="modal" >
        <button onClick={props.handleOnClickHideModal}>x</button>
        <h3>Il n'y a pas {props.subject} à ajouter à cet instant.</h3>
        <p> Mais puisque vous êtes passé par là, je vous invite à prendre un instant pour deviner qui a dit :</p>
        <h4>{quote}</h4>
        <div>
          <button onClick={handleOnClickAuthor}>L'auteur est :</button>
          {authorNameResult === true ? quoteAuthor.name: ""}
        </div>
      </div>
    )
}


export default QuotesModal;
