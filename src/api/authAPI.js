import firebase from 'firebase/app';

export const authAPI = {
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password).then((response) => response);
  },

  logout() {
    return firebase.auth().signOut().then((response) => response);
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
