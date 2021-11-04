import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const FirstPageButton = ({ Input }) => {
  return (
      <div className="Button_div">
        <button class="Button_first_page" id="Pick_me_button"><p className="First_page_buttontext">Slumpa spel</p></button>
        <button class="Button_first_page" id="Alla_spel_button"><p class="First_page_buttontext">Alla Spel</p></button>

      </div>
      );
}
function App() {
  return (
    <div className="App">
    <h2 className="First_page_title">Party Portalen</h2>
   <FirstPageButton></FirstPageButton>
   </div>
  );
}

export default App;