import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies({ movies, renderedMovies, showMoreMovies, isLiked, isLoading, onSave, onDelete, onSearch, checkboxValue, onChangeCheckbox }) {
  return (
    <main className="movies">
      <SearchForm onSearch={onSearch} checkboxValue={checkboxValue} onChangeCheckbox={onChangeCheckbox} />
      {isLoading ?
        (
          <Preloader />
        )
        : (
          <MoviesCardList movies={movies} renderedMovies={renderedMovies} showMoreMovies={showMoreMovies} onSave={onSave} onDelete={onDelete} isLiked={isLiked} />
        )
      }

    </main>
  );
}

export default Movies;
