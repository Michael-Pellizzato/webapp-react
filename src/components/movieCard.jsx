import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const { id, title, genre, abstract, image } = movie;
  return (
    <div className="col-3">
      <div className="card mt-4">
        <img src={image} alt={title} />
        <div className="card-body">
          <h4>{title}</h4>
          <span>{genre}</span>
          <p>{abstract}</p>
          <Link to={`/movies/${id}`} className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
