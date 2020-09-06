import React from 'react';
import './HomeBill.scss'

const HomeBill = ({ bill, currency }) => {
  return (
    <div className='col s12 m6 l4'>
      <div className='card light-blue bill-card'>
        <div className='card-content white-text'>
          <span className='card-title'>Счет в валюте</span>

          <div className='currency-list'>
            {Object.keys(currency).map((cur) => {
              return (
                <div className="currency-item" key={cur}>
                  <strong>{cur}:</strong>
                  <span className="currency-item-value">{Math.floor(bill * currency[cur])}</span>
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
