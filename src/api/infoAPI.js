import firebase from 'firebase/app';
import { authAPI } from './authAPI';

export const infoAPI = {
  async fetchInfo() {
    const uid = authAPI.getUserID();
    return (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
  },

  async updateInfo(bill) {
    const uid = authAPI.getUserID();
    const info = await this.fetchInfo();
    return await firebase.database().ref(`/users/${uid}/info`).update({...info, bill})
  }
}
