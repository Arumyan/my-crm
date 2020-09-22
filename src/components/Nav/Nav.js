import React, { useState, useEffect } from 'react';
import './Nav.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/reducers/authReducer';

const Nav = ({ toggleNav, userName }) => {
  const [date] = useState(new Date());

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setDate(new Date());
    // }, 1000)

    // return () => {
    //   console.log('unmount')
    //   clearInterval(timer);
    // }
  });

  const logout = (e) => {
    e.preventDefault();

    dispatch(logoutThunk(false));
    history.push('/login?message=logout');
  };

  return (
    <nav className="navbar orange lighten-1">
      <div className="navbar-wrapper">
        <span className="navbar-toggle" onClick={toggleNav}></span>
        <span className="navbar-date">{date.toLocaleString()}</span>

        <div className="navbar-actions">
          <span className="navbar-dropdown">
            <span className="dropdown-trigger">{userName ? userName : 'Profile'}</span>
            <ul className="dropdown-list">
              <li className="dropdown-list-item">
                <NavLink className="dropdown-item-action action-profile" to='/profile'>
                  Профиль
                </NavLink>
              </li>
              <li className="dropdown-list-item">
                <span className="dropdown-item-action action-settings">Настройки</span>
              </li>
              <li className="dropdown-list-item">
                <span className="dropdown-item-action action-exit" onClick={logout}>Выйти</span>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
