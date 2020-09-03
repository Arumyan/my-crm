import React, {useState} from 'react'
import './MainLayout.scss'
import Nav from '../../components/Navigation/Navigation'
import Sidebar from '../../components/Sidebar/Sidebar'
import BtnAddNewItem from '../../components/BtnAddNewItem/BtnAddNewItem'

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

      <BtnAddNewItem />
    </div>
  )
}

export default MainLayout