import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDXevs8Lf5QRRYFJPVQfIka330_5Mxht94",
  authDomain: "pokemon-game-743b7.firebaseapp.com",
  databaseURL: "https://pokemon-game-743b7-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-743b7",
  storageBucket: "pokemon-game-743b7.appspot.com",
  messagingSenderId: "747575663905",
  appId: "1:747575663905:web:1be27b6be9652a6742b260"
};
  
  firebase.initializeApp(firebaseConfig);

  export const fire = firebase;

  export const database = fire.database();
  
  export default database;