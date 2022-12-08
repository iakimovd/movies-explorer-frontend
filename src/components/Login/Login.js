import React, { useEffect } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Login.css';
import headerLogo from '../../images/header-logo.svg';
import { Link } from "react-router-dom";


function Login({ onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm('', '', false);
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  return (
    <section className="register">
      <div className="register__container">
        <Link to='/' className="register__logo">
          <img src={headerLogo} alt="Логотип" />
        </Link>
        <h2 className="register__title">Рады видеть!</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <fieldset className="register__fieldset">
            <label className="register__label">E-mail</label>
            <input
              className="register__input"
              id="email-input"
              type="email"
              name="email"
              placeholder="E-mail"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={values.email || ''}
              onChange={handleChange}
            />
            <span className="register__error">{errors.email || ''}</span>
          </fieldset>
          <fieldset className="register__fieldset">
            <label className="register__label">Пароль</label>
            <input
              className="register__input"
              id="password-input"
              type="password"
              name="password"
              placeholder="Пароль"
              required
              value={values.password || ''}
              onChange={handleChange}
            />
            <span className="register__error">{errors.password || ''}</span>
          </fieldset>
          <button className={`register__button ${!isValid && 'register__button_disabled'}`} type='submit' disabled={!isValid}>Войти</button>
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