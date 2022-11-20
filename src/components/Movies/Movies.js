import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import Preloader from "../Preloader/Preloader";

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <FilterCheckbox />
      {/* <Preloader /> */}
    </main>
  );
}

export default Movies;
