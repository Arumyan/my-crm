import React from 'react'
import Nav from '../components/nav/nav'

const MainLayout = (props) => {
  return (
    <>
      <Nav />
      <div className="main">
        {props.children}
      </div>
    </>
  )
}

export default MainLayout