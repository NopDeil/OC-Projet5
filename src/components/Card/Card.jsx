import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <div className="card">
      <Link to={`/accommodation/${id}`}>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

export default Card;
