import React from "react";
import './Navigation.css';

import { Link } from "react-router-dom";

function Navigation({ handleBurgerButton }) {

  return (
    <section className="navigation">

      <div className="navigation-container">

        <button className="navigation__menu-close-button"
          type="button"
          onClick={handleBurgerButton}>
        </button>

        <div className="navigation__movies-nav">

          <Link to="/" className="navigation__nav-link" onClick={handleBurgerButton}>
            Главная
          </Link>

          <Link to="/movies" className="navigation__nav-link" onClick={handleBurgerButton}>
            Фильмы
          </Link>

          <Link to="/saved-movies" className="navigation__nav-link" onClick={handleBurgerButton}>
            Сохранённые фильмы
          </Link>
        </div>

        <div className="navigation__account-container">
          <Link to="/profile" className="navigation__account-link" onClick={handleBurgerButton}>
            Аккаунт
          </Link>

          <button className="navigation__account-button"></button>
        </div>
      </div>
    </section>
  );
}

export default Navigation;