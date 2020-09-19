import React, { useEffect } from 'react';
import './Category.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesCreator } from '../../redux/reducers/categoriesReducer';
import { categoryAPI } from '../../api/categoryAPI';

import CategoryCreate from './CategoryCreate/CategoryCreate';
import CategoryEdit from './CategoryEdit/CategoryEdit';

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);

  const updateCategories = () => {
    categoryAPI.getCategories().then((categories) => {
      dispatch(setCategoriesCreator(categories));
    });
  };

  useEffect(() => {
    updateCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='page-title'>
        <h3>Категории</h3>
      </div>

      <section>
        <div className='row'>
          <CategoryCreate updateCategories={updateCategories} />
          {categories.length && (
            <CategoryEdit
              categories={categories}
              updateCategories={updateCategories}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Category;
