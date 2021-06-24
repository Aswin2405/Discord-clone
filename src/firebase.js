// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB1xKcdMkg7QeqEKW56M2V-QuFNsmnnwJI",
  authDomain: "aswin-discord.firebaseapp.com",
  databaseURL: "https://aswin-discord.firebaseio.com",
  projectId: "aswin-discord",
  storageBucket: "aswin-discord.appspot.com",
  messagingSenderId: "980301690042",
  appId: "1:980301690042:web:cecfbe4bbdc17fa54bbe83",
  measurementId: "G-5ZJ3VCN5SY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
