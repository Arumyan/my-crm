import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import HomeBill from './HomeBill/HomeBill';
import HomeCurrency from './HomeCurrency/HomeCurrency';
import {currencyAPI} from '../../api/currencyAPI';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const info = useSelector((state) => state.infoReducer.info);
  const [currency, setCurrency] = useState(0);

  useEffect(() => {
    currencyAPI.getCurrency().then((responce) => {
      setCurrency(responce)
      setLoading(false)
    });
  }, [])

  const HomeContent = loading ? (
    <Loader />
  ) : (
    <div className='row'>
      <HomeBill bill={info.bill} />
      <HomeCurrency />
    </div>
  );

  return (
    <div>
      <div className='page-title'>
        <h3>Счет</h3>

        <button className='btn waves-effect waves-light btn-small'>
          <i className='material-icons'>refresh</i>
        </button>
      </div>

      {HomeContent}
    </div>
  );
};

export default Home;
