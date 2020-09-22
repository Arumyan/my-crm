import React, { useState } from 'react';
import './Login.scss';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { loginThunk, setAuthActionCreator } from '../../redux/reducers/authReducer';

const Login = () => {

  const {isAuth, isLoading, error} = useSelector((state) => state.authReducer)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch();

  const formChangeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const formValidate = () => {
    dispatch(setAuthActionCreator({error: null}))
    if (form.email === '' || form.password === '') {
      dispatch(setAuthActionCreator({error: 'Поля не должен быть пустыми'}))
      return false;
    }

    return true;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (formValidate()) {
      dispatch(loginThunk(form.email, form.password))
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
            value={form.email}
            name='email'
            className='validate'
            onChange={formChangeHandler}
          />
          <label htmlFor='email'>Email</label>
        </div>

        <div className='input-field'>
          <input
            id='password'
            type='password'
            value={form.password}
            name='password'
            className='validate'
            onChange={formChangeHandler}
          />
          <label htmlFor='password'>Пароль</label>
        </div>

        {error && (
          <span className='form-message red-text text-lighten-1'>{error}</span>
        )}
      </div>

      <div className='card-action'>
        <div>
          <button
            className='btn waves-effect waves-light auth-submit'
            type='submit'
            disabled={isLoading}
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
