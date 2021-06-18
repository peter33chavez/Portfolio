import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxoxBxd4JhWRiiM_DmMge94zcWu4KVyRE",
    authDomain: "portfolio-contact-form-f8a89.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-f8a89-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-f8a89",
    storageBucket: "portfolio-contact-form-f8a89.appspot.com",
    messagingSenderId: "100296227163",
    appId: "1:100296227163:web:a0ecb442a1ed3c4646027e"
  });

  const db = firebaseApp.firestore();

  export { db }