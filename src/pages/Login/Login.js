import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

const Login = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setIsLogin(true);
    } catch (e) {
      //console.log(e);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    login(email, password)
  };

  if(isLogin) {
    return <Redirect to='/' />
  }

  return (
    <form className='card auth-card' onSubmit={handleSumbit}>
      <div className='card-content'>
        <span className='card-title'>Домашняя бухгалтерия</span>

        <div className='input-field'>
          <input
            id='email'
            type='text'
            value={email}
            className='validate'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='email'>Email</label>
          <small className='helper-text invalid'>Email</small>
        </div>

        <div className='input-field'>
          <input
            id='password'
            type='password'
            value={password}
            className='validate'
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor='password'>Пароль</label>
          <small className='helper-text invalid'>Password</small>
        </div>
      </div>
      <div className='card-action'>
        <div>
          <button
            className='btn waves-effect waves-light auth-submit'
            type='submit'
          >
            Войти
            <i className='material-icons right'>send</i>
          </button>
        </div>

        <p className='center'>
          Нет аккаунта?
          <NavLink to={'/register'}>Зарегистрироваться</NavLink>
        </p>
      </div>
    </form>
  );
};

export default Login;
