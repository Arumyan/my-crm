import firebase from 'firebase/app';
import { authAPI } from './authAPI';

export const itemAPI = {
  async createNewItem(itemData) {
    const uid = authAPI.getUserID();
    return await firebase.database().ref(`/users/${uid}/items`).push(itemData)
  },

  async getItems() {
    const uid = authAPI.getUserID();

    const items =
      (
        await firebase.database().ref(`/users/${uid}/items`).once('value')
      ).val() || {};

    // transform categories from firebase
    return Object.keys(items).map((key) => ({
      ...items[key],
      id: key,
    }));
  }
};
