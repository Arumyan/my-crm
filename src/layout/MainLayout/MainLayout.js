import React, {useState, useEffect} from 'react'
import './MainLayout.scss'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import BtnAddNewItem from '../../components/BtnAddNewItem/BtnAddNewItem'

import { useSelector, useDispatch } from 'react-redux';
import {infoAPI} from '../../api/infoAPI'
import { setInfoAction } from '../../redux/reducers/infoReducer';

const MainLayout = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    infoAPI.fetchInfo().then((data) => {
      dispatch(setInfoAction(data))
    })
  }, [dispatch])

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