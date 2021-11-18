import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const addFavorit = (id, name) => {
  if(localStorage.getItem(id))
    localStorage.removeItem(id);
  else
    window.localStorage.setItem(id, JSON.stringify(name));
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
