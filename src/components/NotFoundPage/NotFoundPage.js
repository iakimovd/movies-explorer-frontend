import React from "react";
import './NotFoundPage.css';
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h2 className="not-found-page__title">404</h2>
      <p className="not-found-page__text">Страница не найдена</p>
      <Link to="/" className="not-found-page__link">Назад</Link>
    </section>
  );
}

export default NotFoundPage;