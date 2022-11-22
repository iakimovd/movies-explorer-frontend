import React from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { savedMovies } from "../../utils/constants";


function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList movies={savedMovies} />
    </main>
  );
}

export default SavedMovies;