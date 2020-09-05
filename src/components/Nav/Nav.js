import React, {useState, useEffect, useRef} from 'react'
import './Nav.scss';
import M from 'materialize-css';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthActionCreator } from '../../redux/reducers/authReducer';
import {authAPI} from '../../api/authAPI'

const Nav = ({toggleNav, history, userName}) => {

  const dropdownTrigger = useRef(null);
  const [date] = useState(new Date());

  const dispatch = useDispatch();

  useEffect( () => {
    M.Dropdown.init(dropdownTrigger.current);

    // const timer = setInterval(() => {
    //   setDate(new Date());
    // }, 1000)

    // return () => {
    //   console.log('unmount')
    //   clearInterval(timer);
    // }
  })

  const logout = (e) => {
    e.preventDefault();
    authAPI.logout();
    history.push('/login?message=logout');
    dispatch(setAuthActionCreator({isAuth: false}))
  }

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
              {userName ? userName : 'user'}
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
                <a href="temp" className="dropdown-item" onClick={logout}>
                  <i className="material-icons black-text">assignment_return</i>
                  <span className="black-text">Выйти</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Nav)