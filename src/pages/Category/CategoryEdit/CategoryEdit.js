import React, { useState, useEffect, useRef } from 'react';
import M from 'materialize-css';

//import { useSelector } from 'react-redux';

const CategoryEdit = ({categories}) => {
  const selectEl = useRef(null);
  //const categories = useSelector((state) => state.categoriesReducer.categories);

  //const [currentCategory, setCurrentCategory] = useState(null);
  const [newName, setNewName] = useState('');
  const [newLimit, setNewLimit] = useState(1);

  useEffect(() => {
    M.FormSelect.init(selectEl.current)
    
    if(categories.length) {
      setNewName(categories[0].name)
    }
  }, [categories]);

  useEffect(() => {
    M.updateTextFields()
  }, [newName, newLimit])

  const onChangeSelect = (e) => {
    const currentCategory = categories.find((category) => {
      return category.id === e.target.value
    })

    setNewName(currentCategory.name)
    setNewLimit(currentCategory.limit)
  }
  
  return (
    <div className='col s12 m6'>
      <div>
        <div className='page-subtitle'>
          <h4>Редактировать</h4>
        </div>

        <form>
          <div className='input-field'>
            <select ref={selectEl} onChange={ onChangeSelect }>
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
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <label htmlFor='name'>Название</label>
          </div>

          <div className='input-field'>
            <input
              id='limit'
              type='number'
              value={newLimit}
              onChange={(e) => setNewLimit(e.target.value)}
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
