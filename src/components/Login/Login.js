import React from "react";
import './Login.css';
import headerLogo from '../../images/header-logo.svg';
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="register">
      <div className="register__container">
      <img
        src={headerLogo}
        className="register__logo"
        alt="Логотип"
      />
        <h2 className="register__title">Рады видеть!</h2>
        <form className="register__form">
          <fieldset className="register__fieldset">
            <label className="register__label">E-mail</label>
            <input
              className="register__input"
              value="pochta@yandex.ru"
              id="email-input"
              type="email"
              name="email"
              placeholder="E-mail"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </fieldset>
          <fieldset className="register__fieldset">
            <label className="register__label">Пароль</label>
            <input
              className="register__input"
              value="••••••••••••••"
              id="password-input"
              type="password"
              name="password"
              placeholder="Пароль"
              required
            />
          </fieldset>
          <button className="register__button">Войти</button>
        </form>
        <div className="register__signin">
          <p className="register__signin-ask">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="register__login-link">&nbsp;Регистрация</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;