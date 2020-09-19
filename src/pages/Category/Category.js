import React, {useEffect} from 'react';
import './Category.scss'
import {useDispatch, useSelector} from 'react-redux';
import CategoryCreate from './CategoryCreate/CategoryCreate'
import CategoryEdit from './CategoryEdit/CategoryEdit'
import firebase from 'firebase/app';
import {setCategoriesCreator} from '../../redux/reducers/categoriesReducer'

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  
  const getCategories = async() => {
    const user = await firebase.auth().currentUser;
    const uid = user ? user.uid : null;
    const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
    
    const categoriesArr = [];
    Object.keys(categories).forEach(key => {
      categoriesArr.push({
        name: categories[key].name,
        limit: categories[key].limit,
        id: key,
      })
    })
    //return Object.keys(categories).map(key => ({...categories[key], id: key}))
    return categoriesArr
  }

  useEffect(() => {
    getCategories().then((categories) => {
      dispatch(setCategoriesCreator(categories))
    })
  }, [dispatch])

  return (
    <>
      <div className='page-title'>
        <h3>Категории</h3>
      </div>

      <section>
        <div className='row'>
          <CategoryCreate getCategories={getCategories}/>
          {
            categories.length && <CategoryEdit categories={categories} getCategories={getCategories}/>
          }
          
        </div>
      </section>
    </>
  );
};

export default Category;
