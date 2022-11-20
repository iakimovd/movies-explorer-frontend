import React from "react";
import './SearchForm.css';

function SearchForm(onSubmit) {
  return (
    <section className="search">
      <form className="search__form"
        name="search"
        noValidate
        onSubmit={onSubmit}>
        <input
          className="search__input"
          type="text"
          name="search"
          placeholder="Фильм"
          required
        // value={search || ''}
        // onChange={handleNameChange}
        />
        <button className="search__button" type="submit"></button>
      </form>
    </section>
  )
}

export default SearchForm;