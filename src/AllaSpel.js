import "./App.css";
import SpelLista from "./SpelLista.js";
import games from "./games.json";
import Lowerbar from "./LowerBar";

//Alla spel sidan
function AllaSpel() {
  const Lista_med_spel = games;
  return (
    <div className="App">
      {/*Det som står i rutan högst upp på sidan*/}
      <div className="HeaderDiv">
        <header className="SidaHeader">Alla Spel</header>
      </div>
      <div className="ListaDiv">
        {/*Det som skriver ut hela listan med spel, 
        för att bestämma vad den ska skriva ut tiita i "SpelLista.js"*/}
        {Lista_med_spel.map((allaSpel) => (
          <SpelLista key={allaSpel.id} spel={allaSpel} />
        ))}
      </div>
      <Lowerbar></Lowerbar>
    </div>
  );
}

export default AllaSpel;
