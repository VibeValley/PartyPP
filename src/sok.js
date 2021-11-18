import "./App.css";
import SpelLista from "./SpelLista.js";
import games from "./games.json";
import Lowerbar from "./LowerBar";
import Fuse from "fuse.js";
import React, { useState } from "react";

//Alla spel sidan
function AllaSpel() {
  const Lista_med_spel = games;

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
  const gamesResult = results.map(results => results.item);
  const emptyList = results.length > 1;

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
      </div>

      <form>
        <label>
          <input type="text" name="name" value = {query} onChange={handleOnSearch} />
       </label>
          <input type="submit" value="Search" />
      </form>

      <div className="ListaDiv">
        {/*Det som skriver ut hela listan med spel, 
        för att bestämma vad den ska skriva ut tiita i "SpelLista.js"*/}
        {emptyList ? gamesResult.map((allaSpel) => (
          <SpelLista key={allaSpel.id} spel={allaSpel} />
        )) : <p>test</p>}
      </div>
      <Lowerbar></Lowerbar>
    </div>
  );
}

export default AllaSpel;
