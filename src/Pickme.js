import "./App.css";
import games from "./games.json";
import { useParams } from "react-router-dom";
import Lowerbar from "./LowerBar";
import logo from "./Bilder/Tillbaka.png";


const getGameByID = (id) => {
    return games.find((game) => game.id === id);
  };

function Pick() {
    let randomNumber = Math.floor(Math.random() * (Object.keys(games).length)) + 1; //Get a radnom number from 1 to end of games

    console.log(randomNumber);
    let id = "";
    if (randomNumber < 10){
        id = "0"+randomNumber.toString();
    } else{
        id = randomNumber.toString();
    }
  
    console.log("id:")
    console.log(id);
    const ValdaSpel = getGameByID(id);
  
    return (
    <div className="App">
      <div className="HeaderDiv">

        <header className="SidaHeader" id="DetaljNamn">
          {ValdaSpel.namn}
        </header>
      <a href="/valj_at_mig">
          <p>Slumpa igen!</p>
      </a>
      <div className="detaljDiv">
      <p className="spelare" id="detalj_ID">Antal spelare: {ValdaSpel.spelare}</p>
      <p className="material" id="detalj_ID">Material: {ValdaSpel.material}</p>
      <p className="regler" id="detalj_ID">Relger: {ValdaSpel.regler}</p>
      </div>

      </div>
      <Lowerbar defaultSelected="VäljID" />
    </div>
    );
  }

export default Pick;