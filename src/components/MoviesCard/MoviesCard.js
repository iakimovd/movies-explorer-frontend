import React from "react";
import './MoviesCard.css';

function MoviesCard({ title, duration, link, isLiked }) {

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (`movies-card__like-button ${isLiked ? 'movies-card__like-button_active' : ''}`);

  return (
    <li className="movies-card">
      {/* <a className="movies-card__link" href="{card.trailerLink}" target="_blank" rel="noreferrer"> */}
      <img className="movies-card__image"
        src={link}
        alt={title} />
      {/* </a> */}
      <div className="movies-card__description">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{title}</h3>
          <p className="movies-card__duration">{duration}</p>
        </div>
        <div className={cardLikeButtonClassName} ></div>
      </div>
    </li>
  )
}

export default MoviesCard;