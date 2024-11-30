import React from "react";
import Swal from "sweetalert2";
import { Movie } from "../types/Movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

  const Showdetails= () => {
    Swal.fire({
      title: movie.title,
      text: `Genre: ${movie.genre}`,
      imageUrl: imageSrc,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: movie.title,
    });
  };

  return (
    <div className="movie-card" onClick={Showdetails}>
      <img src={imageSrc} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MovieCard;
