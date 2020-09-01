import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <form className='card auth-card'>
      <div className='card-content'>
        <span className='card-title'>Домашняя бухгалтерия</span>
        <div className='input-field'>
          <input id='email' type='text' className='validate' />
          <label for='email'>Email</label>
          <small className='helper-text invalid'>Email</small>
        </div>
        <div className='input-field'>
          <input id='password' type='password' className='validate' />
          <label for='password'>Пароль</label>
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
