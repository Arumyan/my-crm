import React, { useEffect, useRef } from 'react';
import './Record.scss';
import M from 'materialize-css';

import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesThunk } from '../../redux/reducers/categoriesReducer';
import Loader from '../../components/Loader/Loader';
import { recordAPI } from '../../api/recordAPI';
import { updateInfoThunk } from '../../redux/reducers/infoReducer';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Record = () => {
  const selectEl = useRef(null);
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector(
    (state) => state.categoriesReducer
  );
  const bill = useSelector((state) => state.infoReducer.info.bill);

  useEffect(() => {
    M.updateTextFields();
    if (!categories.length) {
      dispatch(getCategoriesThunk());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    M.FormSelect.init(selectEl.current);
  }, [categories]);

  const initialValues = {
    type: 'income',
    amount: '',
    description: '',
  };

  const onSubmit = (values, onSumbitProps) => {
    const recordData = {
      categoryId: selectEl.current.value,
      amount: values.amount,
      description: values.description,
      type: values.type,
      date: new Date().toLocaleString(),
    };

    recordAPI.createRecord(recordData);

    const updatedBill =
      values.type === 'income'
        ? Number(bill) + Number(values.amount)
        : Number(bill) - Number(values.amount);

    dispatch(updateInfoThunk(updatedBill));
    onSumbitProps.resetForm();
  };

  const validationSchema = Yup.object({
    amount: Yup.number()
      .typeError('Значение должно быть числом')
      .min(1, 'Значение не может быть меньше 1')
      .required('Введите сумму'),
    description: Yup.string().required('Введите описание'),
  });

  const additionalValidate = (values) => {
    let error = {};

    if (values.type === 'outcome' && values.amount > bill) {
      error.amount = 'не достаточно средств';
    }

    return error;
  };

  const formContent = (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validate={additionalValidate}
    >
      {(formik) => (
        <Form className='form form-new-item'>
          <div className='input-field input-field-spaced'>
            <select ref={selectEl}>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <label>Выберите категорию</label>
          </div>

          <div className='input-field-spaced'>
            <label>
              <Field
                className='with-gap'
                name='type'
                type='radio'
                value='income'
              />
              <span>Доход</span>
            </label>
          </div>

          <div className='input-field-spaced'>
            <label>
              <Field
                className='with-gap'
                name='type'
                type='radio'
                value='outcome'
              />
              <span>Расход</span>
            </label>
          </div>

          <div className='input-field'>
            <Field id='amount' name='amount' type='number' />
            <label htmlFor='amount'>Сумма</label>
            <ErrorMessage
              name='amount'
              component='span'
              className='helper-text red-text text-darken-1'
            />
          </div>

          <div className='input-field'>
            <Field id='description' type='text' name='description' />
            <label htmlFor='description'>Описание</label>
            <ErrorMessage
              name='description'
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
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className='page-title'>
        <h3>Новая запись</h3>
      </div>

      {categories.length ? (
        formContent
      ) : (
        <p className='center'>
          Записей пока нет,{' '}
          <NavLink to={'/category'}>создать категорию</NavLink>
        </p>
      )}
    </>
  );
};

export default Record;
