import "./App.css";
import { Link } from "react-router-dom";


const LBButton = ({img, text, linkPath, buttonID, SelectedID}) => {


let tempColor = SelectedID === buttonID ? '#ffd005' : 'linear-gradient(180deg, #ffb800 -37.5%, #f6e441 50%)';



return(
        <Link to={linkPath}>
            
          <button style={{ background: tempColor }} id={buttonID}  className="knappar_bot" type="button">
            <img src={img} alt="AllaSpel" className="FPic"></img>
            <p  className="knappar_text">{text}</p>
          </button>
          
        </Link>
);

}

export default LBButton;