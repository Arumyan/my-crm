import React from 'react'
import './Nav.scss';
//import { NavLink } from 'react-router-dom';

const Nav = ({toggleNav}) => {
  return (
    <nav className="navbar orange lighten-1">
      <div className="nav-wrapper">
        <div className="navbar-left">
          <span className="navbar-toggle" onClick={toggleNav}>
            <i className="material-icons black-text">dehaze</i>
          </span>
          <span className="black-text">12.12.12</span>
        </div>

        <ul className="right hide-on-small-and-down">
          <li>
            <span
                className="dropdown-trigger black-text"
                data-target="dropdown"
            >
              USER NAME
              <i className="material-icons right">arrow_drop_down</i>
            </span>

            <ul id='dropdown' className='dropdown-content'>
              <li>
                <span className="black-text">
                  <i className="material-icons">account_circle</i>Профиль
                </span>
              </li>
              <li className="divider"></li>
              <li>
                <span className="black-text">
                  <i className="material-icons">assignment_return</i>Выйти
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav