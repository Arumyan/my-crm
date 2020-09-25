import React from 'react';
import { NavLink } from 'react-router-dom';

const BtnAddNewItem = () => {
  return (
    <div className='fixed-action-btn'>
      <NavLink to='/record' className='btn-floating btn-large blue'>
        <i className='large material-icons'>add</i>
      </NavLink>
    </div>
  );
};

export default BtnAddNewItem;
