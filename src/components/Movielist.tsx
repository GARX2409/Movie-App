import React from "react";
import { Movie } from "../types/Movie";
import MovieCard from "./Moviecard";  // Asegúrate de que el nombre del archivo sea 'MovieCard.tsx' con mayúscula inicial

// Definir los props con la interfaz de Movie
interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list-container">
      <h2 className="movie-list-title">Películas Recomendadas</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
