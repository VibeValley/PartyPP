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

    /*<a href="/valj_at_mig">
    <p>Slumpa igen!</p>
    </a>*/
  
    return (
      <div className="App">
      <div className="HeaderDiv">
      <div className="SlumpaIgenDiv">
        <a href="/valj_at_mig">
          <p className="SlumpaIgenText">Slumpa igen</p>
        </a>
      </div>
        <header className="SidaHeader" id="DetaljNamn">
         <p id = "spelinfo">Spel info</p>
        </header>
      
      <div className="detaljDiv">
        <div id = "speltitel">  <p> {ValdaSpel.namn} </p> 
        </div>
        <div id="speldetalj">  
      <p id="detaljtitel">Antal spelare:</p> <p id="speltext">{ValdaSpel.spelare} </p>
      <p id="detaljtitel">Material:</p> <p id="speltext">{ValdaSpel.material} </p>
      <p id="detaljtitel">Regler:</p> <p id="speltext">{ValdaSpel.regler} </p>
      </div>
      </div>
      </div>
      <Lowerbar />
    </div>
    );
  }

export default Pick;