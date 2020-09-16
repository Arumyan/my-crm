import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import HomeBill from './HomeBill/HomeBill';
import HomeCurrency from './HomeCurrency/HomeCurrency';
import { currencyAPI } from '../../api/currencyAPI';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const bill = useSelector((state) => state.infoReducer.info.bill);
  const [currencyRate, setCurrencyRate] = useState(0);
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const getCurrency = () => {
    setLoading(true);
    currencyAPI.getCurrency().then((responce) => {
      setCurrencyRate(responce);
      setLoading(false);
    });
  };

  useEffect(() => {
    let cleanupFunction = false;
    currencyAPI
      .getCurrency()
      .then((responce) => {
        if (!cleanupFunction) {
          setCurrencyRate(responce);
          setLoading(false);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });

    return () => (cleanupFunction = true);
  }, []);

  // transform object
  // 1. Object.entries(currencyRate) -> [key, value]
  // 2. map
  // 3. Object.fromEntries - transform to Object
  const convertedCurrencyRate = Object.fromEntries(
    Object.entries(currencyRate).map(([currency, value]) => [
      currency,
      (bill / value).toFixed(2),
    ])
  );

  const HomeContent = loading ? (
    <Loader />
  ) : (
    <div className='row'>
      <HomeBill currencyRate={convertedCurrencyRate} />
      <HomeCurrency currencyRate={currencyRate} />
    </div>
  );

  if (!isAuth) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <div className='page-title'>
        <h3>Счет</h3>

        <button
          className='btn waves-effect waves-light btn-small'
          onClick={getCurrency}
        >
          <i className='material-icons'>refresh</i>
        </button>
      </div>

      {HomeContent}
    </div>
  );
};

export default Home;
