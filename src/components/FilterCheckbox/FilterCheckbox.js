import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ checkboxValue, onChangeCheckbox }) {

  return (
    <div className="search-filter">
      <input
        className="search-filter__checkbox"
        type="checkbox"
        checked={checkboxValue}
        onChange={onChangeCheckbox}
      />
      <span className="search-filter__text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;