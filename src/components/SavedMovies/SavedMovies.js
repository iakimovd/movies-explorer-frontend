import React from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ movies, isLiked, onSave, onDelete, onSearch }) {
  return (
    <main className="saved-movies">
      <SearchForm onSearch={onSearch}/>
      <MoviesCardList movies={movies} onSave={onSave} onDelete={onDelete} isLiked={isLiked} />
    </main>
  );
}

export default SavedMovies;