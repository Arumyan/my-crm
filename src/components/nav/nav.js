import React, {useState, useEffect, useRef} from 'react'
import './Nav.scss';
import M from 'materialize-css';
import { NavLink } from 'react-router-dom';

const Nav = ({toggleNav}) => {

  const dropdownTrigger = useRef(null);
  const [date, setDate] = useState(new Date());

  useEffect( () => {
    M.Dropdown.init(dropdownTrigger.current, {
      //constrainWidth: true
    });

    // const timer = setInterval(() => {
    //   setDate(new Date());
    // }, 1000)

    // return () => {
    //   console.log('unmount')
    //   clearInterval(timer);
    // }
  })

  return (
    <nav className="navbar orange lighten-1">
      <div className="nav-wrapper">
        <div className="navbar-left">
          <span className="navbar-toggle" onClick={toggleNav}>
            <i className="material-icons black-text">dehaze</i>
          </span>
          <span className="black-text">{date.toLocaleString()}</span>
        </div>

        <ul className="right hide-on-small-and-down dropdown-container">
          <li>
            <span
                className="dropdown-trigger black-text"
                data-target="dropdown"
                ref={dropdownTrigger}
            >
              USER NAME
              <i className="material-icons right">arrow_drop_down</i>
            </span>

            <ul id='dropdown' className='dropdown-content'>
              <li>
                <NavLink to='/profile'>
                  <i className="material-icons black-text">account_circle</i>
                  <span className="black-text">Профиль</span>
                </NavLink>
              </li>
              <li className="divider"></li>
              <li>
                <NavLink to='/login'>
                  <i className="material-icons black-text">assignment_return</i>
                  <span className="black-text">Выйти</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav