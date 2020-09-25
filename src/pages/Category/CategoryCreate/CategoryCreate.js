import React, { useEffect } from 'react';
import M from 'materialize-css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {createCategoryThunk} from '../../../redux/reducers/categoriesReducer'
import { useDispatch } from 'react-redux';

const CategoryCreate = () => {
  useEffect(() => {
    M.updateTextFields();
  }, []);

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    limit: 1,
  };

  const onSubmit = (values, onSumbitProps) => {
    dispatch(createCategoryThunk(values.name, values.limit))
    onSumbitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Название не должно быть пустым'),
    limit: Yup.number()
      .typeError('Значение должно быть числом')
      .min(1, 'Значение не может быть меньше 1')
      .required('Введите лимит'),
  });

  return (
    <div className='col s12 m6'>
      <div className='page-subtitle'>
        <h4>Создать</h4>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <div className='input-field'>
              <Field id='name' type='text' name='name' />
              <label htmlFor='name'>Название</label>
              <ErrorMessage
                name='name'
                component='span'
                className='helper-text red-text text-darken-1'
              />
            </div>

            <div className='input-field'>
              <Field id='limit' type='text' name='limit' />
              <label htmlFor='limit'>Лимит</label>
              <ErrorMessage
                name='limit'
                component='span'
                className='helper-text red-text text-darken-1'
              />
            </div>

            <button
              className='btn waves-effect waves-light'
              type='submit'
              disabled={!(formik.dirty & formik.isValid)}
            >
              Создать
              <i className='material-icons right'>send</i>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CategoryCreate;
