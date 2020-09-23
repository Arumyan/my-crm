import React from 'react';
import './Login.scss';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import {
  loginThunk
} from '../../redux/reducers/authReducer';
import { useFormik } from 'formik';

const Login = () => {
  const { isAuth, isLoading, error } = useSelector(
    (state) => state.authReducer
  );
  // const [form, setForm] = useState({
  //   email: '',
  //   password: ''
  // })

  // const formChangeHandler = (e) => {
  //   setForm({...form, [e.target.name]: e.target.value})
  // }

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(loginThunk(values.email, values.password))
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = 'Введите Email';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Email введен некорректно';
      }

      if (!values.password) {
        errors.password = 'Введите пароль';
      } else if (values.password.length < 6) {
        errors.password = 'Пароль должен быть не меньше 6 символов';
      }

      return errors;
    },
  });

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <form className='card auth-card' onSubmit={formik.handleSubmit}>
      <div className='card-content'>
        <h1 className='card-title'>Домашняя бухгалтерия</h1>

        <div className='input-field'>
          <input
            id='email'
            type='text'
            value={formik.values.email}
            name='email'
            //className='validate'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor='email'>Email</label>
          {formik.touched.email && formik.errors.email ? (
            <span className='helper-text red-text text-darken-1'>
              {formik.errors.email}
            </span>
          ) : null}
        </div>

        <div className='input-field'>
          <input
            id='password'
            type='password'
            value={formik.values.password}
            name='password'
            //className={'validate'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor='password'>Пароль</label>
          {formik.touched.password && formik.errors.password ? (
            <span className='helper-text red-text text-darken-1'>
              {formik.errors.password}
            </span>
          ) : null}
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
