import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movies } from "../../utils/constants";
import MoviesCardShowMore from "../MoviesCardShowMore/MoviesCardShowMore";

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <FilterCheckbox />
      {/* <Preloader /> */}
      <MoviesCardList movies={movies} />
      <MoviesCardShowMore />
    </main>
  );
}

export default Movies;
