import React from "react";
import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__header">Технологии</h2>
      <h3 className="techs__sub-header">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__list-item">
          <p className="techs__list-item__text">HTML</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item__text">CSS</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item__text">JS</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item__text">React</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item__text">Git</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item__text">Express.js</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item__text">mongoDB</p>
        </li>
      </ul>
    </section>
  )
}

export default Techs;