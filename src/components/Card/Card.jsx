import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
      <Link className="card" to={`/accommodation/${id}`}>
        <img src={cover} alt={title} />
        <div>
        <h2>{title}</h2>
        </div>
      </Link>
  );
}

export default Card;
