import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox(onSubmit) {
  return (
    <div className="search-filter">
      <input
        className="search-filter__checkbox"
        type="checkbox"
        // onChange={}
        checked
      />
      <span className="search-filter__new-checkbox"></span>
      <span className="search-filter__text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;