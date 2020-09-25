import React, { useEffect } from 'react';
import './Category.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesThunk } from '../../redux/reducers/categoriesReducer';

import CategoryCreate from './CategoryCreate/CategoryCreate';
import CategoryEdit from './CategoryEdit/CategoryEdit';
import Loader from '../../components/Loader/Loader';

const Category = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector(
    (state) => state.categoriesReducer
  );

  const getCategories = () => {
    dispatch(getCategoriesThunk());
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  const categoryContent = (
    <section>
      <div className='row'>
        <CategoryCreate updateCategories={getCategories} />
        <CategoryEdit
          categories={categories}
          updateCategories={getCategories}
        />
      </div>
    </section>
  );

  return (
    <>
      <div className='page-title'>
        <h3>Категории</h3>
      </div>

      {isLoading && <Loader />}

      {error && (
        <p className='red-text text-lighten-1'>Произошла ошибка: {error}</p>
      )}

      {!isLoading && !error && categoryContent}
    </>
  );
};

export default Category;
