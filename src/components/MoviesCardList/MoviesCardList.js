import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardShowMore from "../MoviesCardShowMore/MoviesCardShowMore";

function MoviesCardList({ movies, renderedMovies, showMoreMovies, isLiked, onSave, onDelete }) {
  const location = useLocation();

  return (

    <section className="movies-card-list">
      <ul className="movies-card-list__movies">
        {movies.map((movie) => {
          return (
            <MoviesCard key={movie._id || movie.id} movie={movie} onSave={onSave} onDelete={onDelete} isLiked={isLiked} />
          )
        }
        ).slice(0, renderedMovies)}
      </ul>

      {location.pathname === '/movies' &&
        (movies.length > renderedMovies &&
          (<MoviesCardShowMore showMoreMovies={showMoreMovies} />)
        )}

    </section>

  )
}

export default MoviesCardList;