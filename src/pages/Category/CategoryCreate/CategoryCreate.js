import React, { useState, useEffect } from 'react';
import M from 'materialize-css'

const CategoryCreate = () => {
  const [name, setName] = useState('');
  const [limit, setLimit] = useState(1);
  //const [validateError, setValidateError] = useState(null);

  useEffect(() => {
    M.updateTextFields()
  }, [])

  const onSubmitHandler = (e) => {
    e.preventDefault();

    
  }

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
