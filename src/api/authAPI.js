import firebase from 'firebase/app';

export const authAPI = {
  async login(email, password) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  },

  async logout() {
    await firebase.auth().signOut()
  },


  async register({email, password, name}) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      const uid = user ? user.uid : null;

      await firebase.database().ref(`/users/${uid}/info`).set({
        bill: 10000,
        name: name
      })

    } catch (e) {
      //console.log(e);
    }
  },

  
}
