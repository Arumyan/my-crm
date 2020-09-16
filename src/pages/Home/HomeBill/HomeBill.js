import React from 'react';
import './HomeBill.scss';

const HomeBill = ({ currencyRate }) => {
  return (
    <div className='col s12 m6 l4'>
      <div className='card light-blue bill-card'>
        <div className='card-content white-text'>
          <span className='card-title'>Счет в валюте</span>

          <div className='currency-list'>
            {Object.keys(currencyRate).map((currencyName) => {
              return (
                <div className='currency-item' key={currencyName}>
                  <strong>{currencyName}:</strong>
                  <span className='currency-item-value'>
                    {currencyRate[currencyName]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBill;
