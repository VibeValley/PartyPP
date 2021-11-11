import "./App.css";
import games from "./games.json";
import Lowerbar from "./LowerBar";

const getGameByID = (id) => {
  return games.find((game) => game.id === id);
};

function Favoriter() {
  const favspel = window.localStorage;
  console.log(favspel);
  return (
    <div>
      <p>Favvo</p>
      <Lowerbar />
    </div>
  );
}

export default Favoriter;
