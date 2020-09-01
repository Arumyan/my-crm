import React from 'react';
import { NavLink } from 'react-router-dom';

const BtnAddNewItem = (props) => {
  return (
    <div className='fixed-action-btn'>
      <NavLink to='/new-item' className='btn-floating btn-large blue'>
        <i class='large material-icons'>add</i>
      </NavLink>
    </div>
  );
};

export default BtnAddNewItem;
