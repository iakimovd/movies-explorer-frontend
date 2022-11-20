import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__header">О проекте</h2>
      <ul className="about-project__table">
        <li className="about-project__table-cell">
          <h3 className="about-project__table-cell__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__table-cell__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__table-cell">
          <h3 className="about-project__table-cell__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__table-cell__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <ul className="about-project__visual-table">
        <li className="about-project__visual-table-cell">
          <h3 className="about-project__visual-table-cell__title">1 неделя</h3>
          <p className="about-project__visual-table__text">Back-end</p>
        </li>
        <li className="about-project__visual-table-cell">
          <h3 className="about-project__visual-table-cell__title">4 недели</h3>
          <p className="about-project__visual-table__text">Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;