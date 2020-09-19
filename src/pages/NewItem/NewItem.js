import React, { useState, useEffect, useRef } from 'react';
import './NewItem.scss';
import M from 'materialize-css';

import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesCreator } from '../../redux/reducers/categoriesReducer';
import { categoryAPI } from '../../api/categoryAPI';
import { itemAPI } from '../../api/itemAPI';
import { infoAPI } from '../../api/infoAPI';
import { setInfoAction } from '../../redux/reducers/infoReducer';

const NewItem = () => {
  const selectEl = useRef(null);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const bill = useSelector((state) => state.infoReducer.info.bill);

  const [type, setType] = useState('income');
  const [amount, setAmount] = useState(1);
  const [descr, setDescr] = useState('');

  useEffect(() => {
    M.updateTextFields();
    categoryAPI.getCategories().then((categories) => {
      dispatch(setCategoriesCreator(categories));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    M.FormSelect.init(selectEl.current);
  }, [categories]);

  const canCreateItem = () => {
    if (type === 'income') {
      return true;
    }

    return bill >= amount;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (canCreateItem()) {
      console.log('достаточно средств');

      const itemData = {
        categoryId: selectEl.current.value,
        amount: amount,
        descr: descr,
        type: type,
        date: new Date(),
      };

      itemAPI.createNewItem(itemData);

      const updatedBill = type === 'income' ? Number(bill) + Number(amount) : Number(bill) - Number(amount);
      infoAPI.updateInfo(updatedBill).then(() => {
        return infoAPI.fetchInfo()
      }).then((data) => {
        dispatch(setInfoAction(data));
      });
      
      setAmount(1);
      setDescr('');
    } else {
      console.log('средств не достаточно');
    }
  };

  return (
    <>
      <div className='page-title'>
        <h3>Новая запись</h3>
      </div>

      <form className='form form-new-item' onSubmit={onSubmitHandler}>
        <div className='input-field input-field-spaced'>
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

        <div className='input-field-spaced'>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              value='income'
              checked
              onChange={(e) => setType(e.target.value)}
            />
            <span>Доход</span>
          </label>
        </div>

        <div className='input-field-spaced'>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              value='outcome'
              onChange={(e) => setType(e.target.value)}
            />
            <span>Расход</span>
          </label>
        </div>

        <div className='input-field'>
          <input
            id='amount'
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <label htmlFor='amount'>Сумма</label>
        </div>

        <div className='input-field'>
          <input
            id='description'
            type='text'
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
          />
          <label htmlFor='description'>Описание</label>
        </div>

        <button className='btn waves-effect waves-light' type='submit'>
          Создать
          <i className='material-icons right'>send</i>
        </button>
      </form>
    </>
  );
};

export default NewItem;
