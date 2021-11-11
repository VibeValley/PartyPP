import "./App.css";
import SpelLista from "./SpelLista.js";
import games from "./games.json";
import Lowerbar from "./LowerBar";


function Favoriter(){
    return (
    <div>
        <p>Favvo</p>
        <Lowerbar></Lowerbar>
    </div>
    );
}

export default Favoriter;