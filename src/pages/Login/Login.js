import React from 'react';
import './Login.scss';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { loginThunk } from '../../redux/reducers/authReducer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const { isAuth, isLoading, error } = useSelector(
    (state) => state.authReducer
  );

  // variant handling input
  // const [form, setForm] = useState({
  //   email: '',
  //   password: ''
  // })

  // const formChangeHandler = (e) => {
  //   setForm({...form, [e.target.name]: e.target.value})
  // }

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    dispatch(loginThunk(values.email, values.password));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email введен некорректно')
      .required('Введите Email'),
    password: Yup.string()
      .min(6, 'Пароль должен быть не меньше 6 символов')
      .required('Введите пароль'),
  });

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className='card auth-card'>
        <div className='card-content'>
          <h1 className='card-title'>Домашняя бухгалтерия</h1>

          <div className='input-field'>
            <Field id='email' type='text' name='email' />
            <label htmlFor='email'>Email</label>
            <ErrorMessage
              name='email'
              component='span'
              className='helper-text red-text text-darken-1'
            />
          </div>

          <div className='input-field'>
            <Field id='password' type='password' name='password' />
            <label htmlFor='password'>Пароль</label>
            <ErrorMessage
              name='password'
              component='span'
              className='helper-text red-text text-darken-1'
            />
          </div>

          {error && (
            <span className='form-message red-text text-lighten-1'>
              {error}
            </span>
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
      </Form>
    </Formik>
  );
};

export default Login;
