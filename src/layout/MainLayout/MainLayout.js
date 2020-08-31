import React from 'react'
import './MainLayout.scss'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'

const MainLayout = (props) => {
  return (
    <div className="app-main-layout">
      <Nav />
      <Sidebar/>
      <main className="app-content">
        <div className="app-page">
          {props.children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout