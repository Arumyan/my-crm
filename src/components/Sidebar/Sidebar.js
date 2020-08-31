import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <ul class="sidenav app-sidenav open">
      <li>
        <NavLink to='/' className="waves-effect waves-orange pointer">Счет</NavLink>
      </li>
      <li>
        <NavLink to='/history' className="waves-effect waves-orange pointer">История</NavLink>
      </li>
      <li>
        <NavLink to='/planning' className="waves-effect waves-orange pointer">Планирование</NavLink>
      </li>
      <li>
        <NavLink to='/new-item' className="waves-effect waves-orange pointer">Новая запись</NavLink>
      </li>
      <li>
        <NavLink to='/category' className="waves-effect waves-orange pointer">Категории</NavLink>
      </li>
    </ul>
  )
}

export default Sidebar