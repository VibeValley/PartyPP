import "./App.css";
import games from "./games.json";
import { useParams } from "react-router-dom";
import Lowerbar from "./LowerBar";
import logo from "./Bilder/Tillbaka.png";

const getGameByID = (id) => {
  return games.find((game) => game.id === id);
};

function Detaljsida() {
  let { id } = useParams();
  console.log(id);

  const ValdaSpel = getGameByID(id);

  return (
    <div className="App">
      <div className="HeaderDiv">
        <header className="SidaHeader" id="DetaljNamn">
          <p id="spelinfo">Spel info</p>
        </header>

        <div className="detaljDiv">
          <div id="speltitel">
            {" "}
            <p> {ValdaSpel.namn} </p>
          </div>
          <div id="speldetalj">
            <p id="detaljtitel">Antal spelare:</p>{" "}
            <p id="speltext">{ValdaSpel.spelare} </p>
            <p id="detaljtitel">Material:</p>{" "}
            <p id="speltext">{ValdaSpel.material} </p>
            <p id="detaljtitel">Regler:</p>{" "}
            <p id="speltext">{ValdaSpel.regler} </p>
          </div>
        </div>
      </div>
      <Lowerbar />
    </div>
  );
}

export default Detaljsida;
