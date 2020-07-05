import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_0LpzsdTyMm2PMi6TP1HM9ie8NQwjjSw",
  authDomain: "board-users.firebaseapp.com",
  databaseURL: "https://board-users.firebaseio.com",
  projectId: "board-users",
  storageBucket: "board-users.appspot.com",
  messagingSenderId: "240525452556",
  appId: "1:240525452556:web:0bc4030b4744048dd71529"
};

class Firebase {
  constructor() {
    this.auth = firebase.auth();
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  signout() {
    return this.auth.signOut();
  }
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
      email: email,

    });
  }
  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
  getCurrentUserName() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const newFirebase = new Firebase();
export default newFirebase;
