import React, { useState, useEffect, useRef } from 'react';
import M from 'materialize-css';
import firebase from 'firebase/app';

const CategoryEdit = ({categories}) => {
  const selectEl = useRef(null);
  const [newName, setNewName] = useState('');
  const [newLimit, setNewLimit] = useState(1);

  let currentCategory = {};

  useEffect(() => {
    M.FormSelect.init(selectEl.current)
    
    if(categories.length) {
      setNewName(categories[0].name)
      //currentCategory = categories[0]
    }
  }, [categories]);

  useEffect(() => {
    M.updateTextFields()
  }, [newName, newLimit])

  const onChangeSelect = (e) => {
    currentCategory = categories.find((category) => {
      return category.id === e.target.value
    })

    setNewName(currentCategory.name)
    setNewLimit(currentCategory.limit)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const [id, name, limit] = currentCategory

    const user = await firebase.auth().currentUser;
    const uid = user ? user.uid : null;
    await firebase.database().ref(`/users/${uid}/categories`).child(id).update({name, limit})
  }
  
  return (
    <div className='col s12 m6'>
      <div>
        <div className='page-subtitle'>
          <h4>Редактировать</h4>
        </div>

        <form onSubmit={onSubmitHandler}>
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
