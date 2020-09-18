import React, {useState, useEffect} from 'react';
import './Category.scss'
import CategoryCreate from './CategoryCreate/CategoryCreate'
import CategoryEdit from './CategoryEdit/CategoryEdit'
import firebase from 'firebase/app';


const Category = () => {
  const [categories, setCategories] = useState([]);

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
      setCategories(categories);
    })
  }, [])

  console.log(categories);

  return (
    <>
      <div className='page-title'>
        <h3>Категории</h3>
      </div>

      <section>
        <div className='row'>
          <CategoryCreate/>
          <CategoryEdit categories={categories}/>
        </div>
      </section>
    </>
  );
};

export default Category;
