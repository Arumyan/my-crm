import React, { useEffect } from 'react';
import './Category.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesThunk } from '../../redux/reducers/categoriesReducer';

import CategoryCreate from './CategoryCreate/CategoryCreate';
import CategoryEdit from './CategoryEdit/CategoryEdit';

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

  return (
    <>
      <div className='page-title'>
        <h3>Категории</h3>
      </div>

      <section>
        <div className='row'>
          <CategoryCreate />
          <CategoryEdit
            categories={categories}
            updateCategories={getCategories}
          />
        </div>
      </section>
    </>
  );
};

export default Category;
