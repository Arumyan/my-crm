import React from 'react'
import './Nav.scss';
//import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <span>
            <i class="material-icons black-text">dehaze</i>
          </span>
          <span class="black-text">12.12.12</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <span
                class="dropdown-trigger black-text"
                data-target="dropdown"
            >
              USER NAME
              <i class="material-icons right">arrow_drop_down</i>
            </span>

            <ul id='dropdown' class='dropdown-content'>
              <li>
                <span class="black-text">
                  <i class="material-icons">account_circle</i>Профиль
                </span>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <span class="black-text">
                  <i class="material-icons">assignment_return</i>Выйти
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