import firebase from 'firebase/app';

export const infoAPI = {
  async fetchInfo() {
    const user = firebase.auth().currentUser;
    const uid = user ? user.uid : null;
    const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
    
    return info
  }
}