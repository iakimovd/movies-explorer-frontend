import React, { useEffect } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Register.css';
import headerLogo from '../../images/header-logo.svg';
import { Link } from "react-router-dom";

function Register({ onRegister }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm('', '', false);
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
  }

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onRegister({ name, email, password })
  // };

  // function handleNameSet(e) {
  //   setName(e.target.value);
  // }

  // function handleEmailSet(e) {
  //   setEmail(e.target.value);
  // }

  // function handlePasswordSet(e) {
  //   setPassword(e.target.value);
  // }

  return (
    <section className="register">
      <div className="register__container">
        <img
          src={headerLogo}
          className="register__logo"
          alt="Логотип"
        />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <fieldset className="register__fieldset">
            <label className="register__label">Имя</label>
            <input
              className="register__input"
              id="name-input"
              type="name"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              required
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
              value={values.name}
              onChange={handleChange}
            />
            <span className="register__error">{errors.name || ''}</span>
          </fieldset>
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
              value={values.email}
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
              value={values.password}
              onChange={handleChange}
            />
            <span className="register__error">{errors.password || ''}</span>
          </fieldset>
          <button className={`register__button ${!isValid && 'register__button_disabled'}`} type='submit' disabled={!isValid}>Зарегистрироваться</button>
        </form>
        <div className="register__signin">
          <p className="register__signin-ask">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__login-link">&nbsp;Войти</Link>
        </div>
      </div>
    </section>
  );
}

export default Register;