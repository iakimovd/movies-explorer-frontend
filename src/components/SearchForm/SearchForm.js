import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from 'react-router-dom';

function SearchForm({ onSearch }) {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);

  useEffect(() => {
    if (location.pathname === '/movies') {

      const search = localStorage.getItem('searchValue');
      const checkbox = localStorage.getItem('checkboxValue');

      if (search) {
        setSearchValue(search);
      }
      if (JSON.parse(checkbox) === true) {
        console.log(checkbox);
        setCheckboxValue(true);
      } else {
        setCheckboxValue(false);
      }
    }
  }, [location.pathname]);


  function handleSubmit(evt) {
    evt.preventDefault();
    if (!searchValue) {
      console.log('Введите поисковый запрос');
    }
    onSearch(searchValue, checkboxValue);
  }

  function handleChange(evt) {
    console.log('Введите поисковый запрос');
    setSearchValue(evt.target.value);
  }

  function toggleCheckbox(checkboxValue) {
    setCheckboxValue(checkboxValue);
    onSearch(searchValue, checkboxValue);
  }

  function handleCheckbox(evt) {
    toggleCheckbox(evt.target.checked);
  }

  return (
    <section className="search">
      <form className="search__form"
        name="search"
        // noValidate
        onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          name="search"
          placeholder="Фильм"
          required
          value={searchValue || ''}
          onChange={handleChange}
        />
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox checkboxValue={checkboxValue} onChangeCheckbox={handleCheckbox} />
    </section>
  )
}

export default SearchForm;