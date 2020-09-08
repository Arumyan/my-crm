import firebase from 'firebase/app';

export const authAPI = {
  async login(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  },

  async logout() {
    await firebase.auth().signOut();
  },


  register(email, password, name) {

    return firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      const user = firebase.auth().currentUser;
      const uid = user ? user.uid : null;

      return firebase.database().ref(`/users/${uid}/info`).set({
        bill: 100,
        name: name
      })
    })
  }
}
