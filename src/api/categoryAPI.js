import firebase from 'firebase/app';
import { authAPI } from './authAPI';

export const categoryAPI = {
  async getCategories() {
    const uid = authAPI.getUserID();

    const categories =
      (
        await firebase.database().ref(`/users/${uid}/categories`).once('value')
      ).val() || {};

    // Object.keys(categories).forEach(key => {
    //   categoriesArr.push({
    //     name: categories[key].name,
    //     limit: categories[key].limit,
    //     id: key,
    //   })
    // })

    // transform categories from firebase
    return Object.keys(categories).map((key) => ({
      ...categories[key],
      id: key,
    }));
  },
};
