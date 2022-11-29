import React, { useState } from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {

  const [checked, setChecked] = useState(false);

  function handleCheckbox() {
    setChecked(!checked);
    console.log(checked);
  }

  return (
    <div className="search-filter">
      <input
        className="search-filter__checkbox"
        type="checkbox"
        checked={!checked}
        onChange={handleCheckbox}
      />
      {/* <span className="search-filter__new-checkbox"></span> */}
      <span className="search-filter__text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;