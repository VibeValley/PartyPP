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
    <div className="">
      <div className="HeaderDiv">
        <a href="/AllaSpel">
          <img src={logo} alt="tillbaka" className="HeadPic"></img>
          <p className="TillbakaText">Alla spel</p>
        </a>
        <header className="SidaHeader" id="DetaljNamn">
          {ValdaSpel.name}
        </header>
      </div>
      <p>{ValdaSpel.rules}</p>
      <p>{ValdaSpel.spelare}</p>
      <Lowerbar />
    </div>
  );
}

export default Detaljsida;
