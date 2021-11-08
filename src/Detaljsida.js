import "./App.css";
import games from "./games.json";
import { useParams } from "react-router-dom";
import Lowerbar from "./LowerBar";

const getGameByID = (id) => {
  return games.find((game) => game.id === id);
};

function Detaljsida() {
  let { id } = useParams();
  console.log(id);

  const ValdaSpel = getGameByID(id);

  return (
    <div className="">
      <div className="HeaderDiv">
        <header className="SidaHeader">{ValdaSpel.name}</header>
      </div>
      <p>{ValdaSpel.rules}</p>
      <p>{ValdaSpel.spelare}</p>
      <Lowerbar />
    </div>
  );
}

export default Detaljsida;
