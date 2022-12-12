import React, { useState } from "react";
import './Header.css';
import headerLogo from '../../images/header-logo.svg';
import Navigation from "../Navigation/Navigation";

import { Link, useLocation, useHistory } from 'react-router-dom';

export default function Header({ loggedIn }) {
  const location = useLocation();
  const history = useHistory();

  const [isActive, setIsActive] = useState(false);

  function handleLogin() {
    history.push("/signin");
  }

  function handleBurgerButton() {
    setIsActive(!isActive);
  }

  return (

    <>

      {location.pathname === '/' &&
        (!loggedIn ?
          (<header className={`header header_theme_${location.pathname === '/' ? 'default' : 'dark'
            }`}>
            <div className="header__container">

              <Link to='/' className="header__logo">
                <img src={headerLogo} alt="Логотип" />
              </Link>

              <div className="header__navigation">

                <Link to="/signup" className="header__link">
                  Регистрация
                </Link>

                <button onClick={handleLogin} className="header__link-button">
                  Войти
                </button>

              </div>

            </div>
          </header>)
          :
          (<header className={`header header_theme_${location.pathname === '/' ? 'default' : 'dark'
            }`}>

            <div className="header__container">

              <Link to='/' className="header__logo">
                <img src={headerLogo} alt="Логотип" />
              </Link>

              <div className="header__movies-navigation">

                <Link to="/movies" className="header__nav-link">
                  Фильмы
                </Link>

                <Link to="/saved-movies" className="header__nav-link">
                  Сохранённые фильмы
                </Link>

              </div>

              <div className="header__account-container">
                <Link to="/profile" className="header__account-link">
                  Аккаунт
                </Link>

                <button className="header__account-button"></button>
              </div>

              <button className="header__burger-menu-button"
                type="button"
                onClick={handleBurgerButton}>
              </button>
              {isActive ? <Navigation handleBurgerButton={handleBurgerButton} /> : ''}
            </div>
          </header>)
        )}

      {(location.pathname === '/movies' ||
        location.pathname === '/saved-movies' ||
        location.pathname === '/profile') &&
        (<header className={`header header_theme_${location.pathname === '/' ? 'default' : 'dark'
          }`}>

          <div className="header__container">

            <Link to='/' className="header__logo">
              <img src={headerLogo} alt="Логотип" />
            </Link>

            <div className="header__movies-navigation">
              <Link to="/movies" className="header__nav-link">
                Фильмы
              </Link>

              <Link to="/saved-movies" className="header__nav-link">
                Сохранённые фильмы
              </Link>
            </div>

            <div className="header__account-container">
              <Link to="/profile" className="header__account-link">
                Аккаунт
              </Link>

              <button className="header__account-button"></button>
            </div>

            <button className="header__burger-menu-button"
              type="button"
              onClick={handleBurgerButton}>
            </button>
            {isActive ? <Navigation handleBurgerButton={handleBurgerButton} /> : ''}
          </div>
        </header>)
      }

    </>
  )
}
