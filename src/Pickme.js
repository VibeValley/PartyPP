import "./App.css";
import games from "./games.json";
import Lowerbar from "./LowerBar";

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
      <div className="SlumpaIgenDiv">
        <a href="/valj_at_mig">
          <p className="SlumpaIgenText">Slumpa igen</p>
        </a>
      </div>
        <header className="SidaHeader" id="DetaljNamn">
        </header>
      
      <div className="detaljDiv">
        <div id = "speltitelslump">  <p> {ValdaSpel.namn} </p> 
        </div>
        <div id="speldetalj1">  
      <p id="detaljtitel">Antal spelare:</p> <p id="speltext">{ValdaSpel.spelare} </p>
      <p id="detaljtitel">Material:</p> <p id="speltext">{ValdaSpel.material} </p>
      <p id="detaljtitel">Regler:</p> <p id="speltext">{ValdaSpel.regler} </p>
      </div>
      </div>
      </div>
      <Lowerbar defaultSelected="VäljID" />
    </div>
    );
  }

export default Pick;