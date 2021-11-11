import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const addFavorit = (valdSpel, valdName) => {
  window.localStorage.setItem(valdSpel, JSON.stringify(valdName));
};

const SpelLista = ({ spel }) => {
  //const [favorit, väljFavorit] = useState("");
  // Detta är hur den skriver ut hela listan
  return (
    <div className="Alla_spel_listans_text">
      <button
        className="favBox"
        onClick={() => addFavorit(spel.id, spel.namn)}
      />
      <Link to={"/AllaSpel/" + spel.id}>
        <div>
          <h1>{spel.namn}</h1>
          <p>{spel.beskrivning}</p>
        </div>
      </Link>
    </div>
  );
};

export default SpelLista;
