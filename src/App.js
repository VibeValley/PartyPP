import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Lowerbar from './LowerBar.js';


const FirstPageButton = ({ ButtonText }) => {
  return (
    <div className="Button_div">
      <button className="Button_first_page" id="Pick_me_button">
        <p className="First_page_buttontext">{ButtonText}</p>
        </button>
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
//Main page
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
      <Lowerbar></Lowerbar>
    </div>
  );
}

function AllaSpel() {
  return (
    <h2>HEj</h2>
  )
}

function SlumpaSpel() {
  return (
    <h1>Slump</h1>
  );
}

export default App;