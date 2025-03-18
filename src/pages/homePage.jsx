import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(movies);
  };

  useEffect(fetchMovies, []);

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
