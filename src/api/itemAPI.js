import firebase from 'firebase/app';
import { authAPI } from './authAPI';

export const itemAPI = {
  async createNewItem(itemData) {
    const uid = authAPI.getUserID();
    return await firebase.database().ref(`/users/${uid}/items`).push(itemData)
  },
};
