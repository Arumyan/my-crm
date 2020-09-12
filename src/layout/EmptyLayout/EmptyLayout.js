import React from 'react'
import './EmptyLayout.scss'

const EmptyLayout = (props) => {
  return (
    <div className='empty-layout'>
      {props.children}
    </div>
  )
}

export default EmptyLayout