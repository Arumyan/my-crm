import React from 'react';
import './Category.scss'
import CategoryCreate from './CategoryCreate/CategoryCreate'
import CategoryEdit from './CategoryEdit/CategoryEdit'

const Category = () => {
  return (
    <>
      <div className='page-title'>
        <h3>Категории</h3>
      </div>

      <section>
        <div className='row'>
          <CategoryCreate/>
          <CategoryEdit/>
        </div>
      </section>
    </>
  );
};

export default Category;
