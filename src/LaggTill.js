import Lowerbar from "./LowerBar";

function laggTill() {
  return (
    <div className="App">
      <div className="HeaderDiv">
        <header className="SidaHeader" id="DetaljNamn">
          <p id="spelinfo">Lägg till</p>
        </header>
        <form>
          <label for="fTitel">Titel: </label>
          <input type="text" id="fTitel"></input>
          <br />
          <label for="fAntal">Antal spelare: </label>
          <input type="text" id="fAntal"></input>
          <br />
          <label for="fMats">Material: </label>
          <input type="text" id="fMats"></input>
          <br />
          <label for="fBesk">beskrivning: </label>
          <textarea id="fBesk"></textarea>
          <br />
          <label for="fRegler">Regler: </label>
          <input type="textarea" id="fRegler"></input>
        </form>
      </div>
      <Lowerbar />
    </div>
  );
}

export default laggTill;
