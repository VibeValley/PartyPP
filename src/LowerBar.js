import "./App.css";
import logo1 from "./Bilder/Alla_spel.png";
import logo2 from "./Bilder/FavvoSymbolBar.png";
import logo3 from "./Bilder/Sök.png";
import logo4 from "./Bilder/TärningSymbol.png";
import logo5 from "./Bilder/LäggTillSymbol.png";
import LBButton from "./LBButton";



const Lowerbar = ({defaultSelected}) => {
  return (
    <div>
      <nav className="Foot">
        <LBButton img={logo1} text="Alla Spel" buttonID="AllaSpelID" linkPath="/AllaSpel/" SelectedID={defaultSelected}/>

        <LBButton img={logo2} text="Favoriter" buttonID="FavvoID" linkPath="/Favoriter/" SelectedID={defaultSelected}/>

        <LBButton img={logo3} text="Sök" buttonID="SökID" linkPath="/Sok/" SelectedID={defaultSelected}/>

        <LBButton img={logo4} text="Slumpa spel" buttonID="VäljID" linkPath="/Valj_at_mig/" SelectedID={defaultSelected}/>

        <LBButton img={logo5} text="Lägg till" buttonID="LäggID" linkPath="/Lagg_till/" SelectedID={defaultSelected}/>
      </nav>
    </div>
  );
};

export default Lowerbar;
