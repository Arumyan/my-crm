import React from 'react'
import './EmptyLayout.scss'

const EmptyLayout = (props) => {
  return (
    <div className='grey darken-1 empty-layout'>
      {props.children}
    </div>
  )
}

export default EmptyLayout