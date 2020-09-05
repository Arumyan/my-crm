import React, { useState } from 'react';
import './Login.scss'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { authAPI } from '../../api/authAPI';
//import Loader from '../../components/Loader/Loader';
import { setAuthActionCreator } from '../../redux/reducers/authReducer';

const Login = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const formValidate = () => {
    if(email === '') {
      setError('Email не должен быть пустым')
      return false
    }
    if(password === '') {
      setError('Пароль не должен быть пустым')
      return false
    }

    return true
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError(null);

    if(formValidate()) {
      setLoading(true);

      authAPI
      .login(email, password)
      .then(() => {
        setLoading(false);
        dispatch(setAuthActionCreator({ isAuth: true }));
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
    }
  };

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <form className='card auth-card' onSubmit={onSubmitHandler}>
      <div className='card-content'>
        <h1 className='card-title'>Домашняя бухгалтерия</h1>

        <div className='input-field'>
          <input
            id='email'
            type='text'
            value={email}
            className='validate'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor='email'>Email</label>
        </div>

        <div className='input-field'>
          <input
            id='password'
            type='password'
            value={password}
            className='validate'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor='password'>Пароль</label>
        </div>
        
        {
          error && (<span className='form-message red-text text-lighten-1'>{error}</span>)
        }
        

      </div>

      <div className='card-action'>
        <div>
          <button 
            className='btn waves-effect waves-light auth-submit'
            type='submit'
            disabled={loading}
          >
            Войти
            <i className='material-icons right'>send</i>
          </button>
        </div>

        <p className='center'>
          Нет аккаунта?
          <NavLink to={'/register'}> Зарегистрироваться</NavLink>
        </p>
      </div>
    </form>
  );
};

export default Login;
