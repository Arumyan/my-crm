import React from 'react';

const HomeCurrency = ({ currencyRate }) => {
  const date = new Date();

  return (
    <div className='col s12 m6 l8'>
      <div className='card orange darken-3 bill-card'>
        <div className='card-content white-text'>
          <div className='card-header'>
            <span className='card-title'>Курс валют</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Валюта</th>
                <th>Курс</th>
                <th>Дата</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(currencyRate).map((currencyName) => {
                return (
                  <tr key={currencyName}>
                    <td>{currencyName}</td>
                    <td>{currencyRate[currencyName]}</td>
                    <td>{date.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeCurrency;
