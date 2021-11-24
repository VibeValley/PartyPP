import "./App.css";
import AllaSpel from "./AllaSpel";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Detaljsida from "./Detaljsida";
import Sok from "./sok";
import Pickme from "./Pickme";
import LaggTill from "./LaggTill";
import Favoriter from "./Favoriter";

//Första sidans knapp komponent som tar in en parameter som är det som kommer stå i knappen
const FirstPageButton = ({ ButtonText }) => {
  return (
    <div className="Button_div">
      <button className="Button_first_page" id="Pick_me_button">
        <p className="First_page_buttontext">{ButtonText}</p>
      </button>
    </div>
  );
};

//Huvud Aappen med alla routes
function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/*Routes till olika sidor där element är den nya js filen för sidan*/}
          <Route path="/SlumpaSpel" element={<SlumpaSpel />} />
          <Route path="/AllaSpel/" element={<AllaSpel />} />
          <Route path="/AllaSpel/:id" element={<Detaljsida />} />
          <Route path="/Sok/" element={<Sok />} />
          <Route path="/Valj_at_mig/" element={<Pickme />} />
          <Route path="/Lagg_till/" element={<LaggTill />} />
          <Route path="/Favoriter/" element={<Favoriter />} />
          <Route path="/" element={<MainPage />} />
        </Switch>
      </Router>
    </div>
  );
}

//Huvud Sida med två knapp komponenter
function MainPage() {
  return (
    <div>
      <h2 className="First_page_title">Party Portalen</h2>
      {/*Linken till den andra sidan ligger runt knappen
      detta gör att man kan klicka på den*/}
      <Link to="/SlumpaSpel">
        <FirstPageButton ButtonText={"Slumpa Spel"} />
      </Link>
      <Link to="/AllaSpel/">
        <FirstPageButton ButtonText={"Alla Spel"} />
      </Link>
    </div>
  );
}

function SlumpaSpel() {
  return <h1>Slump</h1>;
}

export default App;
