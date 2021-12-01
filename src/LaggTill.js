import Lowerbar from "./LowerBar";
import React, { useState } from "react";
import scan from "./Bilder/pic.png";

const LaggTillForm = ({}) => {
  const [besk, setBesk] = useState("");

  function handleChangeBesk({ currentText = {} }) {
    const { value } = currentText;
    setBesk(value);
  }

  return (
    <form>
      <div className="row">
        <label>Titel:</label>
      </div>
      <input
        type="text"
        className="LäggtillForms"
        id="fTitel"
        placeholder="Titel..."
      />
      <div className="row">
        <label>Beskrivning:</label>
      </div>
      <textarea
        type="text"
        className="LäggtillForms"
        id="fBesk"
        onChange={handleChangeBesk}
        placeholder="Beskrivning..."
      />
      <div className="row">
        <label>Antal:</label>
      </div>
      <input
        type="text"
        className="LäggtillForms"
        id="fAntal"
        placeholder="Antal spelare..."
      />
      <div className="row">
        <label>Material:</label>
      </div>
      <input
        type="text"
        className="LäggtillForms"
        id="fMats"
        placeholder="Material..."
      />
      <div className="row">
        <label>Regler:</label>
      </div>

      <textarea
        id="fRegler"
        className="LäggtillForms"
        value={besk}
        onChange={handleChangeBesk}
        placeholder="Regler..."
      />
    </form>
  );
};

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <img src={scan}></img>
      </div>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
};
const LäggtillKnapp = (props) => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };
  return (
    <div>
      <button className="LäggtillKnapp" onClick={() => setShow(true)}>
        Lägg till
      </button>
      <Modal onClose={() => setShow(false)} show={show} />
    </div>
  );
};
function laggTill() {
  return (
    <div className="App">
      <div className="HeaderDiv">
        <header className="SidaHeader" id="DetaljNamn">
          <p id="spelinfo">Lägg till</p>
        </header>
        <div className="container">
          <LaggTillForm />
        </div>
        <LäggtillKnapp />
      </div>
      <Lowerbar defaultSelected="LäggID"/>
    </div>
  );
}

export default laggTill;
