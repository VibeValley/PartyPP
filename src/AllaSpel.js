import "./App.css";
import SpelLista from "./SpelLista.js";
import games from "./games.json";

//Alla spel sidan
function AllaSpel() {
  const Lista_med_spel = games;

  return (
    <div className="App">
      <div className="HeaderDiv">
        <header className="SidaHeader">Alla Spel</header>
      </div>
      <div>
        {Lista_med_spel.map((allaSpel) => (
          <SpelLista key={allaSpel.id} spel={allaSpel} />
        ))}
      </div>
    </div>
  );
}

export default AllaSpel;
