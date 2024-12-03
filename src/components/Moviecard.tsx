import React from "react";
import Swal from "sweetalert2";
import { Movie } from "../types/Movie";

interface MovieCardProps {
  movie: Movie;
}

const Moviecard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

  const showDetails = () => {
    Swal.fire({
      title: movie.title,
      text: `Género: ${movie.genre}\nDescripción: ${movie.description}`, // Solo se asigna una vez el texto
      imageUrl: imageSrc,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: movie.title,
    });
  };

  return (
    <div className="movie-card" onClick={showDetails}>
      <img src={imageSrc} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  );
};

export default Moviecard;
