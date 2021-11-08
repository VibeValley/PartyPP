import "./LowerBar.css";
import logo1 from "./Bilder/Alla_spel.png";
import logo2 from "./Bilder/FavvoSymbol.png";
import logo3 from "./Bilder/Sök.png";
import logo4 from "./Bilder/TärningSymbol.png";

const Lowerbar = ({}) => {
  return (
    <div>
      <nav className="Foot">
        <button className="knappar_bot" type="button">
          <img src={logo1} alt="AllaSpel" className="FPic"></img>
          <p className="knappar_text">Alla Spel</p>
        </button>

        <button className="knappar_bot" type="button">
          <img src={logo2} alt="AllaSpel" className="FPic"></img>
          <p className="knappar_text">Favoriter</p>
        </button>

        <button className="knappar_bot" type="button">
          <img src={logo3} alt="AllaSpel" className="FPic"></img>
          <p className="knappar_text">Sök</p>
        </button>

        <button className="knappar_bot" type="button">
          <img src={logo4} alt="AllaSpel" className="FPic"></img>
          <p className="knappar_text">Pick me</p>
        </button>
      </nav>
    </div>
  );
};

export default Lowerbar;
