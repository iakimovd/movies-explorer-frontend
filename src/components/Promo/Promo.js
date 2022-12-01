import React from "react";
import './Promo.css';
import promoLogo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <section className="promo">

      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img
        src={promoLogo}
        className="promo__logo"
        alt="Логотип"
      />

    </section>
  )
}

export default Promo;