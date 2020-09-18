import React, { useState, useEffect, useRef } from 'react';
import M from 'materialize-css';

import { useSelector } from 'react-redux';

const CategoryEdit = () => {
  const selectEl = useRef(null);
  const categories = useSelector((state) => state.categoriesReducer.categories);

  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    M.FormSelect.init(selectEl.current)
    M.updateTextFields()
    setCurrentCategory(categories[0])
  }, [categories, currentCategory]);
  
  return (
    <div className='col s12 m6'>
      <div>
        <div className='page-subtitle'>
          <h4>Редактировать</h4>
        </div>

        <form>
          <div className='input-field'>
            <select ref={selectEl} onChange={(e) => console.log(e.target.value)}>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id} >
                    {category.name}
                  </option>
                );
              })}
            </select>
            <label>Выберите категорию</label>
          </div>

          <div className='input-field'>
            <input
              type='text'
              id='name'
              value={currentCategory ? currentCategory.name : ''}
              onChange={(e) => console.log(e.target.value)}
            />
            <label htmlFor='name'>Название</label>
          </div>

          <div className='input-field'>
            <input
              id='limit'
              type='number'
              value={currentCategory ? currentCategory.limit : ''}
              onChange={(e) => console.log(e.target.value)}
            />
            <label htmlFor='limit'>Лимит</label>
          </div>

          <button className='btn waves-effect waves-light' type='submit'>
            Обновить
            <i className='material-icons right'>send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryEdit;
