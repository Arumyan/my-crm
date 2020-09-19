import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import firebase from 'firebase/app';

const CategoryCreate = ({ updateCategories }) => {
  const [name, setName] = useState('');
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const categoryCreate = async (name, limit) => {
    const user = await firebase.auth().currentUser;
    const uid = user ? user.uid : null;
    const category = await firebase
      .database()
      .ref(`/users/${uid}/categories`)
      .push({ name, limit });

    return category;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    categoryCreate(name, limit).then(() => {
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
      {/* {validateError && (<div className='form-error'>{validateError}</div>)} */}
    </div>
  );
};

export default CategoryCreate;
