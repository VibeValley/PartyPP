import './LowerBar.css';
import './Bilder/Alla_spel.png'


const Lowerbar = ({ }) => {
    return (
        <div>
            <navbar className='Foot'>

                <button className="knappar_bot" type="button">
                    <img src="C:\Users\xgujo\Party\src\Bilder\Alla_spel.png" alt="AllaSpel" className="FPic"></img>
                    <p className="knappar_text">Alla Spel</p>
                </button>

                <button className="knappar_bot" type="button">
                    <p className="knappar_text">Favoriter</p>
                </button>

                <button className="knappar_bot" type="button">
                    <p className="knappar_text">Sök</p>
                </button>

                <button className="knappar_bot" type="button">
                    <p className="knappar_text">Pick me</p>
                </button>

            </navbar>
        </div>
    );
}


export default Lowerbar;