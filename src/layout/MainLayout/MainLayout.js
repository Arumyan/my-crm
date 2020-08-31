import React, {useState} from 'react'
import './MainLayout.scss'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'

const MainLayout = (props) => {

  const [isOpen, setIsOpen] =  useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  let appContentClasses = isOpen ? '' : ' full';

  return (
    <div className="app-main-layout">
      <Nav toggleNav={toggleNav}/>
      <Sidebar isOpen={isOpen}/>

      <main className={'app-content' + appContentClasses}>
        <div className="app-page">
          {props.children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout