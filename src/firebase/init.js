import firebase from 'firebase'
import firestore from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAJba_rvDxa1R1OCZVyx20np3b6WJP4j0Q",
    authDomain: "hungers-9478f.firebaseapp.com",
    databaseURL: "https://hungers-9478f.firebaseio.com",
    projectId: "hungers-9478f",
    storageBucket: "hungers-9478f.appspot.com",
    messagingSenderId: "677762350370",
    appId: "1:677762350370:web:a6df6eaa7dbbb641e8797b",
    measurementId: "G-SMXWJY9HWL"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()