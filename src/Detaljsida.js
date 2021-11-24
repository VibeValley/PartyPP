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

 // const ValdaSpel = JSON.parse(getGameByID(id));

  return (
    <div className="App">
      <div className="HeaderDiv">
        <a href="/AllaSpel">
          <img src={logo} alt="tillbaka" className="HeadPic"></img>
          <p className="TillbakaText">Alla spel</p>
        </a>
        <header className="SidaHeader" id="DetaljNamn">
          {ValdaSpel.namn}
        </header>
      
      <div className="detaljDiv">
      <p className="spelare" id="detalj_ID">Antal spelare: {ValdaSpel.spelare}</p>
      <p className="material" id="detalj_ID">Material: {ValdaSpel.material}</p>
      <p className="regler" id="detalj_ID">Relger: {ValdaSpel.regler}</p>
      </div>
      </div>
      <Lowerbar />
    </div>
  );
}

export default Detaljsida;
