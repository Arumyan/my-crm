import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB2la3L0Ec6Eq06WYoA6_S1BYsFBihyiM0",
  authDomain: "my-crm-b693d.firebaseapp.com",
  databaseURL: "https://my-crm-b693d.firebaseio.com",
  projectId: "my-crm-b693d",
  storageBucket: "my-crm-b693d.appspot.com",
  messagingSenderId: "342950837669",
  appId: "1:342950837669:web:bbb2a0c95beb8dde653c4c"
});


export default firebase
