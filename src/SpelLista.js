import "./App.css";
import { Link } from "react-router-dom";
const SpelLista = ({ spel }) => {
  // Detta är hur den skriver ut hela listan
  return (
    <Link to={"/AllaSpel/" + spel.id}>
      <div className="Alla_spel_listan">
        <div className="Alla_spel_titel">
          <h1>{spel.name}</h1>
        </div>
        <div ClassName="Alla_spel_Beskrivning">
          <p>{spel.beskrivning}</p>
        </div>
        <div ClassName="Alla_spel_Spelare">
          <p>{spel.spelare}</p>
        </div>
        <div ClassName="Alla_spel_Material">
          <p>(Ikoner här)</p>
        </div>
        
      </div>
    </Link>
  );
};

export default SpelLista;
