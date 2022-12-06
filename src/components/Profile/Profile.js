import React, { useEffect } from "react";
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Profile.css';
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onUpdateUser, onLogout }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const currentUser = React.useContext(CurrentUserContext);


  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true)
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: values.name,
      email: values.email
    });
  }

  function handleLogout() {
    onLogout();
  }
  const checkValid = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, {currentUser?.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <fieldset className="profile__fieldset">
            <label className="profile__label">Имя</label>
            <input
              className="profile__input"
              type="name"
              name="name"
              required
              minLength="2"
              maxLength="30"
              value={values.name || ''}
              onChange={handleChange}
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
            />

          </fieldset>
          <span className="profile__error">{errors.name || ''}</span>
          <fieldset className="profile__fieldset">
            <label className="profile__label">E-mail</label>
            <input
              className="profile__input"
              type="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={values.email || ''}
              onChange={handleChange}
            />
          </fieldset>
          <span className="profile__error">{errors.email || ''}</span>
          <button className={`profile__edit-button ${checkValid ? 'profile__edit-button_disabled' : ''}`} type='submit' disabled={checkValid ? true : false}>Редактировать</button>
        </form>
        <Link className="profile__logout-link" to="/" onClick={handleLogout}>Выйти из аккаунта</Link>
      </div>
    </section>
  );
}

export default Profile;