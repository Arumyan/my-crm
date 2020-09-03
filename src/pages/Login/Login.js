import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { authAPI } from '../../api/authAPI';
import { setAuthDataAction } from '../../redux/reducers/authReducer';

const Login = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const emailFromState = useSelector((state) => state.authReducer.email);
  const passwordFromState = useSelector((state) => state.authReducer.password);

  const [email, setEmail] = useState(emailFromState);
  const [password, setPassword] = useState(passwordFromState);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setErrorMessage(null);

    authAPI
      .login(email, password)
      .then(() => {
        dispatch(setAuthDataAction({ email, password, isAuth: true }));
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
  };

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
        <span className="red lighten-1">{errorMessage}</span>
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
          <NavLink to={'/register'}> Зарегистрироваться</NavLink>
        </p>
      </div>
    </form>
  );
};

export default Login;
