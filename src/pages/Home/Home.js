import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import HomeBill from './HomeBill/HomeBill';
import HomeCurrency from './HomeCurrency/HomeCurrency';
import {currencyAPI} from '../../api/currencyAPI';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const bill = useSelector((state) => state.infoReducer.info.bill);
  const [currency, setCurrency] = useState(0);

  const getCurrency = () => {
    setLoading(true)
    currencyAPI.getCurrency().then((responce) => {
      setCurrency(responce)
      setLoading(false)
    });
  }

  useEffect(() => {
    getCurrency()
  }, [])

  const HomeContent = loading ? (
    <Loader />
  ) : (
    <div className='row'>
      <HomeBill bill={bill} currency={currency}/>
      <HomeCurrency currency={currency}/>
    </div>
  );

  return (
    <div>
      <div className='page-title'>
        <h3>Счет</h3>

        <button className='btn waves-effect waves-light btn-small' onClick={getCurrency}>
          <i className='material-icons'>refresh</i>
        </button>
      </div>

      {HomeContent}
    </div>
  );
};

export default Home;
