import React from 'react';
import CategoryCreate from './CategoryCreate/CategoryCreate'
import CategoryEdit from './CategoryEdit/CategoryEdit'

const Category = () => {
  return (
    <div>
      <div className='page-title'>
        <h3>Категории</h3>
      </div>

      <section>
        <div className='row'>
          <CategoryCreate/>
          <CategoryEdit/>
        </div>
      </section>
    </div>
  );
};

export default Category;
