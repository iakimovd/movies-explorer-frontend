import React from "react";
import './Footer.css';

function Footer() {
  return (
    <main>
      <footer className="footer">

        <h3 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__container">
          <p className="footer__copyright">© 2022</p>
          <nav className="footer__navigation">
            <a className="footer__link"
              href="https://practicum.yandex.ru/"
              rel="noreferrer"
              target="_blank">
              Яндекс.Практикум
            </a>
            <a className="footer__link"
              href="https://github.com/iakimovd"
              rel="noreferrer"
              target="_blank">
              Github
            </a>
          </nav>
        </div>

      </footer>
    </main>
  );
}

export default Footer;