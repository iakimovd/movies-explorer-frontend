import React from "react";
import './MoviesCardShowMore.css';

function MoviesCardShowMore({ showMoreMovies }) {

  return (
    <section className="movies-card-show-more">
      <button className="movies-card-show-more__button" onClick={showMoreMovies}>Ещё</button>
    </section>
  )
}

export default MoviesCardShowMore;