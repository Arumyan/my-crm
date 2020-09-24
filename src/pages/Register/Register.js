import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/reducers/authReducer';
import { useFormik } from 'formik';

const Register = () => {
  const { isAuth, isLoading, error } = useSelector(
    (state) => state.authReducer
  );

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
    name: '',
  };

  const onSubmit = (values) => {
    dispatch(registerThunk(values.email, values.password, values.name));
  };

  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = 'Введите Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email введен некорректно';
    }

    if (!values.password) {
      errors.password = 'Введите пароль';
    } else if (values.password.length < 6) {
      errors.password = 'Пароль должен быть не меньше 6 символов';
    }

    if (!values.name) {
      errors.name = 'Введите имя';
    }

    return errors;
  };

  /*
  The code below for validation is made to understand exactly what Formik does:
  onChange -> handleChange, onBlur -> handleBlur, and so on.
  Reduced boilerplate code is on the Login page 
  */
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <form className='card auth-card' onSubmit={formik.handleSubmit}>
      <div className='card-content'>
        <span className='card-title'>Домашняя бухгалтерия</span>

        <div className='input-field'>
          <input
            id='email'
            type='text'
            name='email'
            value={formik.values.email}
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
            name='password'
            value={formik.values.password}
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

        <div className='input-field'>
          <input
            id='name'
            type='text'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor='name'>Имя</label>
          {formik.touched.name && formik.errors.name ? (
            <span className='helper-text red-text text-darken-1'>
              {formik.errors.name}
            </span>
          ) : null}
        </div>
        <p>
          <label>
            <input type='checkbox' />
            <span>С правилами согласен</span>
          </label>
        </p>

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
            Зарегистрироваться
            <i className='material-icons right'>send</i>
          </button>
        </div>

        <p className='center'>
          Уже есть аккаунт?
          <NavLink to={'/login'}> Войти</NavLink>
        </p>
      </div>
    </form>
  );
};

export default Register;
