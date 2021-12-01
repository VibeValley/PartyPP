import "./App.css";
import SpelLista from "./SpelLista.js";
import games from "./games.json";
import Lowerbar from "./LowerBar";
import Fuse from "fuse.js";
import React, { useState } from "react";

//Alla spel sidan
function AllaSpel() {

  const [query, setQuery] = useState("");

  const fuse = new Fuse(games, { 
    keys: [
      'namn',
      'beskrivning',
      'regler',
      'spelare',
      'material'
    ],
    includeScore : true
  })


  const results = fuse.search(query);
  const gamesResult = query === "" ? games :results.map(results => results.item);

  function handleOnSearch({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
  }

  console.log();


  return (
    <div className="App">
      {/*Det som står i rutan högst upp på sidan*/}
      <div className="HeaderDiv">
        <header className="SidaHeader">Sök</header>
      

      <form>
        <label>
          <input placeholder = "sök..."className= "isaksearch"type="text" name="name" value = {query} onChange={handleOnSearch} />
       </label>
      </form>

      <div className="ListaDiv">
        {/*Det som skriver ut hela listan med spel, 
        för att bestämma vad den ska skriva ut tiita i "SpelLista.js"*/}
        {gamesResult.length ? gamesResult.map((allaSpel) => (
          <SpelLista key={allaSpel.id} spel={allaSpel} />
        )) : <p>Vi kunde ej hitta det du sökte</p>}
      </div>
      </div>
      </div>
      <Lowerbar></Lowerbar>
    </div>
  );
}

export default AllaSpel;
