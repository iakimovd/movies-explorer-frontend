import React from "react";
import { useHistory } from 'react-router-dom';
import './NotFoundPage.css';
// import { Link } from "react-router-dom";

function NotFoundPage() {
  const history = useHistory();

  return (
    <section className="not-found-page">
      <h2 className="not-found-page__title">404</h2>
      <p className="not-found-page__text">Страница не найдена</p>
      <button className="not-found-page__button" onClick={() => history.goBack()}>Назад</button>
    </section>
  );
}

export default NotFoundPage;