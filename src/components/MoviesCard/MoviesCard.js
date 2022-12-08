import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({ movie, isLiked, onSave, onDelete }) {
  const location = useLocation();

  const mins = movie.duration % 60;
  const hours = (movie.duration - mins) / 60;

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (`movies-card__like-button ${isLiked(movie) ? 'movies-card__like-button_active' : ''}`);

  function handleLikeClick() {
    onSave(movie);
  }

  function handleDislikeClick() {
    onDelete(movie);
  }

  return (
    <li className="movies-card">
      <a className="movies-card__link" href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image"
          src={location.pathname === "/movies" ?
            `https://api.nomoreparties.co${movie.image.url}` : movie.image}
          alt={movie.nameRU} />
      </a>
      <div className="movies-card__description">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{movie.nameRU}</h3>
          <p className="movies-card__duration">{(hours < 1) ? '' : `${hours}ч`} {mins}м</p>
        </div>
        {location.pathname === '/movies' &&
         <button className={cardLikeButtonClassName} onClick={!isLiked ? handleDislikeClick : handleLikeClick}></button>


            // (isLiked(movie) ? (<button className='movies-card__like-button_active' onClick={handleDislikeClick}></button>) :
            //   (<button className='movies-card__like-button' onClick={handleLikeClick}></button>)
            // )

        }
        {location.pathname === '/saved-movies' && (
          <button className='movies-card__like-button_delete-card' onClick={handleDislikeClick}></button>
        )}
      </div>
    </li>
  )
}

export default MoviesCard;