import React, { useState, useEffect, useRef } from 'react';
import M from 'materialize-css';
import Loader from '../../../components/Loader/Loader';
import { editCategoryThunk } from '../../../redux/reducers/categoriesReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CategoryEdit = () => {
  const selectEl = useRef(null);
  const dispatch = useDispatch();

  const { categories, isLoading } = useSelector(
    (state) => state.categoriesReducer
  );

  const [currentCategory, setCurrentCategory] = useState({
    id: null,
    name: '',
    limit: 1,
  });

  useEffect(() => {
    M.FormSelect.init(selectEl.current);

    if (categories.length) {
      const currentCategory = categories.find((category) => {
        return category.id === selectEl.current.value;
      });

      setCurrentCategory(currentCategory);
    }
  }, [categories]);

  useEffect(() => {
    setTimeout(() => {
      M.updateTextFields();
    }, 0)   
  }, [currentCategory]);

  const onChangeSelect = (e) => {
    const currentCategory = categories.find((category) => {
      return category.id === e.target.value;
    });

    setCurrentCategory(currentCategory);
  };

  const initialValues = {
    id: null,
    name: '',
    limit: 1,
  };

  const onSubmit = (values) => {
    dispatch(editCategoryThunk(values.id, values.name, values.limit));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Название не должно быть пустым'),
    limit: Yup.number()
      .typeError('Значение должно быть числом')
      .min(1, 'Значение не может быть меньше 1')
      .required('Введите лимит'),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='col s12 m6'>
      <div className='page-subtitle'>
        <h4>Редактировать</h4>
      </div>

      <Formik
        initialValues={currentCategory || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            <div className='input-field'>
              <select
                ref={selectEl}
                onChange={onChangeSelect}
                disabled={!categories.length}
              >
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

            <button className='btn waves-effect waves-light' type='submit'>
              Обновить
              <i className='material-icons right'>send</i>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CategoryEdit;
