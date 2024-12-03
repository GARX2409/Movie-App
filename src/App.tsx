
import React, { useState } from 'react';
import './App.css';
import Movielist from './components/Movielist';

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: 'Moana',
      genre: 'Infantil',
      description: 'La historia sigue a Moana, una valiente joven polinesia elegida por el océano para salvar a su pueblo. En su viaje, se une al semidiós Maui y juntos enfrentan desafíos épicos para devolver el corazón robado a Te Fiti y restaurar la armonía. Una película llena de música, cultura y paisajes vibrantes.',
      image: 'moana.jfif',
    },
    {
      id: 2,
      title: 'Jumanji',
      genre: 'Aventura',
      description: 'Cuatro adolescentes descubren un antiguo videojuego que los transporta a la peligrosa selva de Jumanji, donde deben asumir avatares con habilidades únicas. Para regresar al mundo real, deben completar desafíos mientras enfrentan obstáculos y descubren el trabajo en equipo.',
      image: 'jumanji.jpg',
    },
    {
      id: 3,
      title: 'Venom',
      genre: 'Ciencia Ficción',
      description: 'Eddie Brock, un periodista caído en desgracia, se convierte en el anfitrión de un simbionte alienígena que le otorga habilidades extraordinarias. Juntos forman Venom, un anti-héroe que lucha contra amenazas mientras lidia con su compleja relación entre humano y alienígena.',
      image: 'descargar.jfif',
    },
    {
      id: 4,
      title: 'Dune',
      genre: 'Ciencia Ficción',
      description: 'Una épica adaptación de la novela de Frank Herbert, que sigue a Paul Atreides en un planeta lleno de intrigas políticas y luchas por la supervivencia.',
      image: 'du.jpg',
    },
    {
      id: 5,
      title: 'The Batman',
      genre: 'Acción',
      description: 'Un reboot oscuro y emocionante de Batman, con Robert Pattinson como protagonista, investigando un misterio rodeado de corrupción en Gotham.',
      image: 'batman.jpg',
    },
    {id: 6,
      title: 'Everything Everywhere All At Once',
      genre: 'Ciencia Ficción',
      description: 'Una madre debe enfrentarse a las complejidades del multiverso mientras intenta salvar su familia y el universo.',
      image: 'ever.jpg',
    },
    {id: 7,
      title: 'Top Gun: Maverick ',
      genre: 'Accion',
      description: 'Secuela nostálgica de Top Gun, con Tom Cruise retomando su papel icónico en misiones llenas de adrenalina.',
      image: 'top.jpg',
    },
    {id: 8,
      title: 'El Callejón de las Almas Perdidas',
      genre: 'Drama',
      description: 'Una obra maestra visual de Guillermo del Toro que explora la corrupción y obsesión en un entorno de circo y espectáculo',
      image: 'callejon.jpg',
    },{
      id: 9,
      title: 'Una Joven Prometedora',
      genre: 'Drama',
      description: 'Un impactante relato sobre justicia y venganza en una sociedad marcada por el abuso y la indiferencia.',
      image: 'una.jpg',
    },
    {id: 10,
      title: 'Titane',
      genre: 'Terror',
      description: 'Una provocadora y visceral exploración del cuerpo y la identidad, ganadora de la Palma de Oro en Cannes.',
      image: 'titane.jpg',
    },
    {id: 11,
      title: 'Parásitos',
      genre: 'Drama',
      description: 'Ganadora del Oscar, esta película surcoreana muestra una crítica social mientras desarrolla una intrigante y oscura historia familiar.',
      image: 'parasitos.jpg',
    },
    {id: 12,
      title: 'Spider-Man: No Way Home',
      genre: 'Accion',
      description: 'El multiverso se abre para este emocionante capítulo en el que Peter Parker enfrenta a villanos de otras dimensiones.',
      image: 'no way.jpg',},
  ]);

  const [selectedGenre, setSelectedGenre] = useState<string>('Todas');

  const filteredMovies =
    selectedGenre === 'Todas'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="app-container">
      <h1 className="app-title">Lista De Peliculas</h1>

      <div className="genre-selector">
        <label htmlFor="genre-select">Selecciona categoría: </label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Infantil">Infantil</option>
          <option value="Aventura">Aventura</option>
          <option value="Drama">Drama</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
          <option value="Acción">Acción</option>
          <option value="Terror">Terror</option>
        </select>
      </div>

      <Movielist movies={filteredMovies} />

      <footer className="footer">
        © 2024 MovieApp | Diseñado con ❤️ por <a href="#">Breyner Garay</a>
        <br />
        <span>Disfruta de nuestras películas ❤️ </span>
      </footer>
    </div>
  );
};

export default App;