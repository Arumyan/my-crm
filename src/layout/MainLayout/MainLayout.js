import React from 'react'
import './MainLayout.scss'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'

const MainLayout = (props) => {
  return (
    <div className="app-main-layout">
      <Nav />
      <Sidebar/>
      <div className="main">
        {props.children}
      </div>
    </div>
  )
}

export default MainLayout