import "./App.css";
const SpelLista = ({ spel }) => {
  // Detta är hur den skriver ut hela listan
  return (
    <div className="Alla_spel_listans_text">
      <h1>{spel.name}</h1>
      <p>{spel.rules}</p>
      <p>{spel.spelare}</p>
    </div>
  );
};

export default SpelLista;
