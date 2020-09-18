import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';

const CategoryEdit = ({ categories }) => {
  const selectEl = useRef(null);
  useEffect(() => {
    M.FormSelect.init(selectEl.current);
  }, []);

  return (
    <div className='col s12 m6'>
      <div>
        <div className='page-subtitle'>
          <h4>Редактировать</h4>
        </div>

        <form>
          <div className='input-field'>
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

          <div className='input-field'>
            <input type='text' id='name' />
            <label htmlFor='name'>Название</label>
          </div>

          <div className='input-field'>
            <input id='limit' type='number' />
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
