import React from "react";
import './Profile.css';
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <label className="profile__label">Имя</label>
            <input className="profile__input"></input>
          </fieldset>
          <fieldset className="profile__fieldset">
            <label className="profile__label">E-mail</label>
            <input className="profile__input"></input>
          </fieldset>
          <button className="profile__edit-button">Редактировать</button>
        </form>
        <Link className="profile__logout-link" to="/signin">Выйти из аккаунта</Link>
      </div>
    </section>
  );
}

export default Profile;