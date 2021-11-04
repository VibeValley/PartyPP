import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link, 
} from "react-router-dom";


const FirstPageButton = ({ButtonText}) => {
  return (
    <div className="Button_div">
      <button  className="Button_first_page" id="Pick_me_button"><p className="First_page_buttontext">{ButtonText}</p></button>
    </div>
  );
}
function App() {
  return (
    <div>
      <Router>
        <Switch>
         <Route path="/AllaSpel" element={<AllaSpel/>} />
          <Route path="/" element={<MainPage/>}/>
        </Switch>
      </Router>
    </div>
  );
}

function MainPage() {
  return (
    <div className="App">
      <h2 className="First_page_title">Party Portalen</h2>
      <FirstPageButton ButtonText={"Slumpa Spel"}/>
      <Link to="/AllaSpel">
      <FirstPageButton ButtonText={"Alla Spel"}/>
      </Link>
      </div>
  );
}

function AllaSpel() {
return(
  <h2>HEj</h2>
)
}

export default App;