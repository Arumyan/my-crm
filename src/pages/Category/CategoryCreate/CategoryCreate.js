import React from 'react';

const CategoryCreate = () => {
  return (
    <div className='col s12 m6'>
      <div>
        <div className='page-subtitle'>
          <h4>Создать</h4>
        </div>

        <form>
          <div className='input-field'>
            <input id='name' type='text' />
            <label htmlFor='name'>Название</label>
          </div>

          <div className='input-field'>
            <input id='limit' type='number' />
            <label htmlFor='limit'>Лимит</label>
          </div>

          <button className='btn waves-effect waves-light' type='submit'>
            Создать
            <i className='material-icons right'>send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryCreate;
