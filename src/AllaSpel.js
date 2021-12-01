import "./App.css";
import SpelLista from "./SpelLista.js";
import games from "./games.json";
import Lowerbar from "./LowerBar";
import Fuse from "fuse.js";
import React, { useState } from "react";
import titelallaspel from "./Bilder/allaspeltext.png";


function LBDark() {
  

}


//Alla spel sidan
function AllaSpel() {
  const Lista_med_spel = games;

  var hej = window.location.href;
  const urlHis = hej.split('/');
  console.log(urlHis[3]);



/*
  const updatedAnswersCount = update(this.state.answersCount, {
    [answer]: {$apply: (currentValue) => currentValue},
  });

  this.setState({
    answersCount: updatedAnswersCount,
    answer: answer
  }); 
 }
*/

  return (
    <div className="App">
          <div><img src={titelallaspel} className = "titelallaspel" ></img></div>
      {/*Det som står i rutan högst upp på sidan*/}
      <div className="HeaderDiv">
        <header className="SidaHeader"></header>
  
        <div className="ListaDiv">
          {/*Det som skriver ut hela listan med spel, 
        för att bestämma vad den ska skriva ut tiita i "SpelLista.js"*/}
          {games.map((spel) => (
            <SpelLista key={spel.id} spel={spel} />
          ))}
        </div>
      </div>

      <Lowerbar defaultSelected="AllaSpelID"></Lowerbar>
    </div>
  );
}

export default AllaSpel;
