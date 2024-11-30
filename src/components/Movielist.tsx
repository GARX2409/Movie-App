import React from "react";
import { Movie } from "../types/Movie";
import Moviecard from "./Moviecard";

// Definir los props con la interfaz de Movie
interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movielist">
      {movies.map((movie) => (
        <Moviecard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
