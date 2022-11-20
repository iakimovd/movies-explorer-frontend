import React from "react";
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      {/* <div className="portfolio__container"> */}
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a
            href="https://iakimovd.github.io/how-to-learn/"
            rel="noreferrer"
            target="_blank"
            className="portfolio__link">
            Статичный сайт
          </a>
          {/* <p className='portfolio__link-arrow'>↗</p> */}
        </li>
        <li className="portfolio__item">
          <a
            href="https://iakimovd.github.io/russian-travel/"
            rel="noreferrer"
            target="_blank"
            className="portfolio__link">
            Адаптивный сайт
          </a>
          {/* <p className='portfolio__link-arrow'>↗</p> */}
        </li>
        <li className="portfolio__item">
          <a
            href="https://iakimovd.project.mesto.nomoredomains.icu/sign-in"
            rel="noreferrer"
            target="_blank"
            className="portfolio__link">
            Одностраничное приложение
          </a>
          {/* <p className='portfolio__link-arrow'>↗</p> */}
        </li>
      </ul>
      {/* </div> */}
    </section>
  )
}

export default Portfolio;