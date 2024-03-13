//IMPORT
import Data from "../../logements.json";
import { Link } from "react-router-dom";

function Cards() {
    return (
        <div className="gallery">
            {Data.map(({ id, title, cover }) => (
                <Link className="card" to={`Logement/${id}`} key={id}>
                    <img className="card_img" src={cover} alt={title} />
                    <div className='gradient-location'></div>
                    <h2 className="card_title">{title}</h2>
                </Link>
            ))}
        </div>
    );
}

export default Cards;