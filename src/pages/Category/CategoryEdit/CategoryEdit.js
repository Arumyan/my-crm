import React, { useState, useEffect, useRef } from 'react';
import M from 'materialize-css';
import { categoryAPI } from '../../../api/categoryAPI';

const CategoryEdit = ({ categories, updateCategories }) => {
  const selectEl = useRef(null);

  const [currentCategory, setCurrentCategory] = useState({
    name: '',
    limit: 1,
  });

  const [error, setError] = useState(null);

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
    M.updateTextFields();
  }, [currentCategory]);

  const formValidate = () => {
    if(currentCategory.name === '' || currentCategory.limit === '') {
      setError('Поля не должны быть пустыми')
      return false
    }
    return true
  }

  const onChangeSelect = (e) => {
    const currentCategory = categories.find((category) => {
      return category.id === e.target.value;
    });

    setCurrentCategory(currentCategory);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError(null)

    if(formValidate()) {
      const {id, name, limit} = currentCategory;

      categoryAPI.editCategory(id, name, limit).then(() => {
        updateCategories();
      });
    }
  };

  return (
    <div className='col s12 m6'>
      <div>
        <div className='page-subtitle'>
          <h4>Редактировать</h4>
        </div>

        <form onSubmit={onSubmitHandler}>
          <div className='input-field'>
            <select ref={selectEl} onChange={onChangeSelect}>
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
            <input
              type='text'
              id='name'
              value={currentCategory.name}
              onChange={(e) =>
                setCurrentCategory({ ...currentCategory, name: e.target.value })
              }
            />
            <label htmlFor='name'>Название</label>
          </div>

          <div className='input-field'>
            <input
              id='limit'
              type='number'
              value={currentCategory.limit}
              onChange={(e) =>
                setCurrentCategory({
                  ...currentCategory,
                  limit: e.target.value,
                })
              }
            />
            <label htmlFor='limit'>Лимит</label>
          </div>

          <button className='btn waves-effect waves-light' type='submit'>
            Обновить
            <i className='material-icons right'>send</i>
          </button>

            { error && <div className="red-text text-darken-2">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default CategoryEdit;
