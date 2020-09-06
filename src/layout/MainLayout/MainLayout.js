import React, {useState} from 'react'
import './MainLayout.scss'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import BtnAddNewItem from '../../components/BtnAddNewItem/BtnAddNewItem'
//import { Redirect } from 'react-router-dom';

import { useSelector} from 'react-redux';


const MainLayout = (props) => {

  const [isOpen, setIsOpen] =  useState(true);
  const info = useSelector((state) => state.infoReducer.info);
 

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  let appContentClasses = isOpen ? '' : ' full';

  return (
    <div className="app-main-layout">
      <Nav toggleNav={toggleNav} userName={info.name}/>
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