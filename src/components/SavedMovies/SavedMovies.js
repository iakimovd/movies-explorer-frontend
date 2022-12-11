import React, { useState, useEffect } from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ movies, isLiked, onSave, onDelete, onSearch }) {

  // Массив найденых фильмов в /saved-movies
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Параметры запроса: текст и состояние чекбокса
  const [searchValue, setSearchValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);

  const [isSearchDone, setIsSearchDone] = useState(false);

  // Функция поиска фильмов
  function findMovie(movies, searchValue, checkboxValue) {
    let shortsFilter = movies;
    let result;

    if (checkboxValue) {
      shortsFilter = shortsFilter.filter((movie) => movie.duration <= 40);
    }

    result = shortsFilter.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
    })
    return result;
  }

  function handleSearch(searchValue, checkboxValue) {
    const searchResult = findMovie(movies, searchValue, checkboxValue);
    setFilteredMovies(searchResult);
    setSearchValue(searchValue);
    setCheckboxValue(checkboxValue);
    setIsSearchDone(true);
  }


  useEffect(() => {
    if (filteredMovies.length > 0) {
      const searchResult = findMovie(movies, searchValue, checkboxValue);
      setFilteredMovies(searchResult);
    }
  }, [movies, searchValue, checkboxValue, filteredMovies.length]);

  return (
    <main className="saved-movies">
      <SearchForm onSearch={handleSearch} />
      <MoviesCardList movies={isSearchDone ? filteredMovies : movies} onSave={onSave} onDelete={onDelete} isLiked={isLiked} />
    </main>
  );
}

export default SavedMovies;