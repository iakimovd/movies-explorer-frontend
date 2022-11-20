import React from "react";
import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__container">
        <ul className="nav-tab__links">
          <li className="nav-tab__link">
            О проекте
          </li>
          <li className="nav-tab__link">
            Технологии
          </li>
          <li className="nav-tab__link">
            Студент
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default NavTab;