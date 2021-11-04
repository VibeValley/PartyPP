import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import games from './games.json';


const FirstPageButton = ({ ButtonText }) => {
  return (
    <div className="Button_div">
      <button className="Button_first_page" id="Pick_me_button"><p className="First_page_buttontext">{ButtonText}</p></button>
    </div>
  );
}
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/SlumpaSpel" element={<SlumpaSpel />} />
          <Route path="/AllaSpel" element={<AllaSpel />} />
          <Route path="/" element={<MainPage />} />
        </Switch>
      </Router>
    </div>
  );
}

function MainPage() {
  return (
    <div className="App">
      <h2 className="First_page_title">Party Portalen</h2>
      <Link to="/SlumpaSpel">
        <FirstPageButton ButtonText={"Slumpa Spel"} />
      </Link>
      <Link to="/AllaSpel">
        <FirstPageButton ButtonText={"Alla Spel"} />
      </Link>
    </div>
  );
}

function AllaSpel() {
  return (
  <h2>{games[0].name}</h2>

    )
}

console.log(games);

function SlumpaSpel() {
  return (
    <div>
      
      <h2>Slumpa Spel</h2>
      
      <div className="slidecontainer">
        <p className="antalspelare">Antal Spelare</p>
      <input type="range" min="1" max="10" value="1" className="slider" id="myRange"></input>
      </div>
    
    </div>
  );
}

export default App;