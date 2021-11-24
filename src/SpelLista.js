import "./App.css";
import { Link } from "react-router-dom";
import emptyStar from "./Bilder/FavvoSymbol.png";
import filledStar from "./Bilder/FavvoSymbolFylld.png";


const addFavorit = (id, name) => {
  if (localStorage.getItem(id)) localStorage.removeItem(id);
  else window.localStorage.setItem(id, JSON.stringify(name));
};

const changeImage = (id, name) => {
  if (document.getElementById(id).src == { emptyStar }) {
    document.getElementById(id).src = { filledStar };
    window.localStorage.setItem(id, JSON.stringify(name));
  } else {
    document.getElementById(id).src = { emptyStar };
    localStorage.removeItem(id);
  }
};

const SpelLista = ({ spel }) => {
  //const [favorit, väljFavorit] = useState("");
  // Detta är hur den skriver ut hela listan
  return (
    <div className="Alla_spel_listans_text">
      <div onClick={() => changeImage(spel.id, spel.namn)}>
        <img
          src={emptyStar}
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
