import "./App.css";
import { Link } from "react-router-dom";
const SpelLista = ({ spel }) => {
  // Detta är hur den skriver ut hela listan
  return (
    <Link to={"/AllaSpel/" + spel.id}>
      <div className="Alla_spel_listans_text">
        <h1>{spel.name}</h1>
        <p>{spel.beskrivning}</p>
        <p>{spel.spelare}</p>
      </div>
    </Link>
  );
};

export default SpelLista;
