import firebase from 'firebase/app';
import { authAPI } from './authAPI';

export const recordAPI = {
  async createRecord(record) {
    console.log(record)
    const uid = authAPI.getUserID();
    return await firebase.database().ref(`/users/${uid}/records`).push(record)
  },

  async getRecords() {
    const uid = authAPI.getUserID();

    const records =
      (
        await firebase.database().ref(`/users/${uid}/records`).once('value')
      ).val() || {};

    // transform categories from firebase
    return Object.keys(records).map((key) => ({
      ...records[key],
      id: key,
    }));
  }
};
