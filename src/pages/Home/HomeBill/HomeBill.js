import React from 'react';

const HomeBill = ({ bill }) => {
  return (
    <div className='col s12 m6 l4'>
      <div className='card light-blue bill-card'>
        <div className='card-content white-text'>
          <span className='card-title'>Счет в валюте</span>

          <p className='currency-line'>
            <span>{bill}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBill;
