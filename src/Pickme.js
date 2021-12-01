import "./App.css";
import games from "./games.json";
import { useParams } from "react-router-dom";
import Lowerbar from "./LowerBar";
import logo from "./Bilder/Tillbaka.png";


const getGameByID = (id) => {
    return games.find((game) => game.id === id);
  };

function Pick() {
    let randomNumber = Math.floor(Math.random() * (Object.keys(games).length + 1)); //Get a radnom number
    console.log("randomNumber:")
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
          <a href="/AllaSpel">
            <img src={logo} alt="tillbaka" className="HeadPic"></img>
            <p className="TillbakaText">Alla spel</p>
          </a>
          <header className="SidaHeader" id="DetaljNamn">
            {ValdaSpel.namn}
          </header>
        </div>
        <div className="detaljDiv">
        <p>Antal spelare: {ValdaSpel.spelare}</p>
        <p>Material: {ValdaSpel.material}</p>
        <p>Relger: {ValdaSpel.regler}</p>
        </div>
        <Lowerbar />
      </div>
    );
  }

export default Pick;