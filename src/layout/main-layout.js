import React from 'react'

const MainLayout = (props) => {
  return (
    <>
      <nav>Навигация</nav>
      <div className="main">
        {props.children}
      </div>
    </>
  )
}

export default MainLayout