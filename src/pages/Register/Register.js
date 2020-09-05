import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { authAPI } from '../../api/authAPI';
import { setAuthActionCreator } from '../../redux/reducers/authReducer';

const Register = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault()

    authAPI.register({email, password, name}).then(() => {
      dispatch(setAuthActionCreator({isAuth: true}))
    })
  }

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <form className='card auth-card' onSubmit={onSubmitHandler}>
      <div className='card-content'>
        <span className='card-title'>Домашняя бухгалтерия</span>

        <div className='input-field'>
          <input
            id='email'
            type='text'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor='email'>Email</label>
          <small className='helper-text invalid'>Email</small>
        </div>

        <div className='input-field'>
          <input
            id='password'
            type='password'
            className='validate'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor='password'>Пароль</label>
          <small className='helper-text invalid'>Password</small>
        </div>

        <div className='input-field'>
          <input
            id='name'
            type='text'
            className='validate'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor='name'>Имя</label>
          <small className='helper-text invalid'>Name</small>
        </div>
        <p>
          <label>
            <input type='checkbox' />
            <span>С правилами согласен</span>
          </label>
        </p>
      </div>
      <div className='card-action'>
        <div>
          <button
            className='btn waves-effect waves-light auth-submit'
            type='submit'
          >
            Зарегистрироваться
            <i className='material-icons right'>send</i>
          </button>
        </div>

        <p className='center'>
          Уже есть аккаунт?
          <NavLink to={'/login'}>Войти</NavLink>
        </p>
      </div>
    </form>
  );
};

export default Register;
