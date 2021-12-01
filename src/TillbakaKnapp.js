import "./App.css";
import logo from "./Bilder/Tillbaka.png";
import { Link } from "react-router-dom";


const tillbaka = ({link}) => {
    return(

        <a href={link}>
          <img src={logo} alt="tillbaka" className="HeadPic"></img>
          <p className="TillbakaText">Tillbaka</p>
        </a>
);
}

export default tillbaka;