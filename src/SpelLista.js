import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyStar from "./Bilder/FavvoSymbol.png";
import filledStar from "./Bilder/FavvoSymbolFylld.png";

const SpelLista = ({ spel }) => {
  const [isFavorite, setIsFavorit] = useState(
    localStorage.getItem(spel.id) !== null
  );

  const addFavorit = (id, name) => {
    setIsFavorit(localStorage.getItem(spel.id) === null);
    if (localStorage.getItem(id)) localStorage.removeItem(id);
    else window.localStorage.setItem(id, JSON.stringify(name));
  };

  return (
    <div className="Alla_spel_listans_text">
      <img
        src={isFavorite ? filledStar : emptyStar}
        onClick={() => addFavorit(spel.id, spel.namn)}
        alt="AllaSpel"
        className="favBox"
        id={spel.id}
      ></img>
      <Link to={"/AllaSpel/" + spel.id}>
        <div>
          <h1 className="ListaTitel">{spel.namn}</h1>
          <p className="ListaBesk">{spel.beskrivning}</p>
        </div>
      </Link>
    </div>
  );
};

export default SpelLista;
