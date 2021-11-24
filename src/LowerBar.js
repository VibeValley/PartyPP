import "./App.css";
import logo1 from "./Bilder/Alla_spel.png";
import logo2 from "./Bilder/FavvoSymbol.png";
import logo3 from "./Bilder/Sök.png";
import logo4 from "./Bilder/TärningSymbol.png";
import logo5 from "./Bilder/LäggTillSymbol.png";
import { Link } from "react-router-dom";



const Lowerbar = ({}) => {
  return (
    <div>
      <nav className="Foot">
        <Link to="/AllaSpel/">
          <button className="knappar_bot" type="button">
            <img src={logo1} alt="AllaSpel" className="FPic"></img>
            <p className="knappar_text">Alla Spel</p>
          </button>
        </Link>

        <Link to="/Favoriter">
          <button className="knappar_bot" type="button">
            <img src={logo2} alt="AllaSpel" id="FPicFav"></img>
            <p className="knappar_text">Favoriter</p>
          </button>
        </Link>

        <Link to="/Sok">
          <button className="knappar_bot" type="button">
            <img src={logo3} alt="AllaSpel" className="FPic"></img>
            <p className="knappar_text">Sök</p>
          </button>
        </Link>

        <Link to="/Valj_at_mig">
          <button className="knappar_bot" type="button">
            <img src={logo4} alt="AllaSpel" className="FPic"></img>
            <p className="knappar_text">Välj åt mig</p>
          </button>
        </Link>

        <Link to="/Lagg_till">
          <button className="knappar_bot" type="button">
            <img src={logo5} alt="AllaSpel" className="FPic"></img>
            <p className="knappar_text">Lägg till</p>
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Lowerbar;
