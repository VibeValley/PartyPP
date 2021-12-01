import "./App.css";
import SpelLista from "./SpelLista.js";
import allaSpel from "./AllaSpel.js";
import games from "./games.json";
import Lowerbar from "./LowerBar";
import Fuse from "fuse.js";
import React, { useState } from "react";
import favtitel from "./Bilder/favoritertext.png";

const getGameByID = (id) => {
  return games.find((game) => game.id === id);
};

function Favoriter() {
  //Går igenom allt i localStorage
  const favoGames = [];
  for(var i =0; i < localStorage.length; i++){
    favoGames.push(getGameByID(localStorage.key(i)))
  }

  return (
    <div className="App">
      {/*Det som står i rutan högst upp på sidan*/}
      <div><img src={favtitel} className = "titelfavo" ></img></div>
      <div className="HeaderDiv">
      
        <header className="SidaHeader"></header>
      
      <div className="ListaDiv">
        {/*Här skriver vi ut listan med favoritspel, som finns i window.localStorage*/}
        {favoGames.map((allaSpel) => (
          <SpelLista key={allaSpel.id} spel={allaSpel} />
        ))}

      </div>
      </div>
      <Lowerbar></Lowerbar>
    </div>
  );
}

export default Favoriter;
