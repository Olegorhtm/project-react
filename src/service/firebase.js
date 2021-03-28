import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBMtMPkcFV_NBpg5BLscSNtWUpxwDNH7IA",
  authDomain: "pocemon-game-23778.firebaseapp.com",
  databaseURL: "https://pocemon-game-23778-default-rtdb.firebaseio.com",
  projectId: "pocemon-game-23778",
  storageBucket: "pocemon-game-23778.appspot.com",
  messagingSenderId: "694107591506",
  appId: "1:694107591506:web:1267470254f86fa771a08b"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }
  getPocemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    })
  }
  offPocemonSoket = () => {
    this.database.ref('pokemons').off()
  }
  getPocemonOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }
  postPokemon = (keyId, pokemon) => {
    this.database.ref(`pokemons/${keyId}`).set(pokemon);

  }
  addPokemon = (enemyPocemon) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(enemyPocemon);
  }
}


export default Firebase;
