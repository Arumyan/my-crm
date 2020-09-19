import firebase from 'firebase/app';

export const authAPI = {

  getUserID() {
    const user = firebase.auth().currentUser;
    const uid = user ? user.uid : null;

    return uid
  },
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  logout() {
    return firebase.auth().signOut();
  },

  register(email, password, name) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        return this.getUserID();
      })
      .then((uid) => {
        return firebase.database().ref(`/users/${uid}/info`).set({
          bill: 100,
          name: name,
        });
      });
  },
};
