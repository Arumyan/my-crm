import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import { categoryAPI } from '../../../api/categoryAPI';

const CategoryCreate = ({ updateCategories }) => {
  const [name, setName] = useState('');
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    categoryAPI.createCategory(name, limit).then(() => {
      updateCategories();
      setName('');
      setLimit(1);
    });
  };

  return (
    <div className='col s12 m6'>
      <div className='page-subtitle'>
        <h4>Создать</h4>
      </div>

      <form onSubmit={onSubmitHandler}>
        <div className='input-field'>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor='name'>Название</label>
        </div>

        <div className='input-field'>
          <input
            id='limit'
            type='number'
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value);
            }}
          />
          <label htmlFor='limit'>Лимит</label>
        </div>

        <button className='btn waves-effect waves-light' type='submit'>
          Создать
          <i className='material-icons right'>send</i>
        </button>
      </form>
    </div>
  );
};

export default CategoryCreate;
