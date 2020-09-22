import React, { useState } from 'react';
import './Login.scss';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { loginThunk } from '../../redux/reducers/authReducer';

const Login = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const isLoading = useSelector((state) => state.authReducer.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const formValidate = () => {
    if (email === '' || password === '') {
      setError('Поля не должен быть пустыми');
      return false;
    }

    return true;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (formValidate()) {
      dispatch(loginThunk(email, password))
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
