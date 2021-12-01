import "./App.css";
import games from "./games.json";
import { useParams } from "react-router-dom";
import React, { useState } from 'react'
import Lowerbar from "./LowerBar";
import logo from "./Bilder/Tillbaka.png";
import SpelLista from "./SpelLista.js";


const getGameByID = (id) => {
    return games.find((game) => game.id === id);
  };

const sortGamesByMaterial = (Material) => {
  return games.find((game) => game.material == Material);
}

function Pick() {

  const [searchString, setSearchString] = useState('')

  function changeInput (event) {
    if (searchString == 'Valfri dryck')
      setSearchString('')
    else
      setSearchString('Valfri dryck')
  }

  const matchSearch = countryName => {
    const lowerCaseWord = countryName.toLowerCase()
    const lowerCaseSearchString = searchString.toLowerCase()
    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0
  }

  const sortedGames = games.filter(games => matchSearch(games.material))
  console.log(sortedGames)

  
    return (
    <div className="App">
      <div className="HeaderDiv">
        <p>Välj vad du vill dude</p>

      <input type='checkbox' onChange={changeInput} />
      <input type='checkbox' onChange={changeInput} />

      <div className="ListaDiv">
        {/*Det som skriver ut hela listan med spel, 
        för att bestämma vad den ska skriva ut tiita i "SpelLista.js"*/}
        {sortedGames.map((allaSpel) => (
          <SpelLista key={allaSpel.id} spel={allaSpel} />
        ))}
      </div>

      </div>
      <Lowerbar />
    </div>
    );
  }

export default Pick;