import React, { useState } from 'react';
import './App.css';
import Movielist from './components/Movielist';

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: 'Moana',
      genre: 'Infantil',
      image: 'moana.jfif',
    },
    {
      id: 2,
      title: 'Jumanji',
      genre: 'Otros',
      image: 'jumangi.jfif',
    },
    {
      id: 3,
      title: 'Venom',
      genre: 'Otros',
      image: 'descargar.jfif',
    },
  ]);

  const [selectedGenre, setSelectedGenre] = useState<string>('Todas');

  // Filtrar películas según el género seleccionado
  const filteredMovies =
    selectedGenre === 'Todas'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="app-container">
      <h1 className="app-title">Movie List</h1>

      {/* Selector de Género */}
      <div className="genre-selector">
        <label htmlFor="genre-select">Seleccionar categoría: </label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Infantil">Infantil</option>
          <option value="Otros">Otros</option>
        </select>
      </div>

      {/* Lista de Películas */}
      <Movielist movies={filteredMovies} />
      <footer className="footer">
  © 2024 MovieApp | Diseñado con ❤️ por <a href="#">Breyner Garay</a>
  <br />
  <span>Disfruta de nuestras películas</span>
</footer>
    </div>
  );
};

export default App;
