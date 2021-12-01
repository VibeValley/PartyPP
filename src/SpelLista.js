import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyStar from "./Bilder/FavvoSymbol.png";
import filledStar from "./Bilder/FavvoSymbolFylld.png";

// const changeImage = (id, name) => {
//   if (document.getElementById(id).src.match({ emptyStar })) {
//     document.getElementById(id).src = { filledStar };
//     window.localStorage.setItem(id, JSON.stringify(name));
//   } else if (document.getElementById(id).src.match({ filledStar })) {
//     document.getElementById(id).src = { emptyStar };
//     localStorage.removeItem(id);
//   }
// };
  
const SpelLista = ({ spel }) => {
  //const [favorit, väljFavorit] = useState("");
  // Detta är hur den skriver ut hela listan
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
      <div>
        <img
          src={isFavorite ? filledStar : emptyStar}
          onClick={() => addFavorit(spel.id, spel.namn)}
          alt="AllaSpel"
          className="favBox"
          id={spel.id}
        ></img>
      </div>
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
