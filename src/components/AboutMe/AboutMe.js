import React from "react";
import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Дмитрий</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 34 года</p>
          <p className="about-me__text">Я родился и живу в Верхней Салде, закончил радиотехнический факультет УРФУ.
            У меня есть жена и две дочери. Я люблю слушать музыку и смотреть фильмы.
            После того, как прошёл курс по веб-разработке, планирую найти работу программистом.
          </p>
          <a
            className="about-me__link"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/iakimovd">
            Github
          </a>
        </div>
        <img className="about-me__photo"
          src={photo}
          alt="фотография" />
      </div>
    </section>
  )
}

export default AboutMe;