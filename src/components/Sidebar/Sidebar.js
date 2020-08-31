import React from 'react'

const Sidebar = (props) => {
  return (
    <ul class="sidenav app-sidenav open">
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Счет</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">История</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Планирование</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Новая запись</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Категории</a>
      </li>
    </ul>
  )
}

export default Sidebar