import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpHeLdfVtGLSfosmHUmE5Saljzhg51k3Q",
    authDomain: "fevm-f5006.firebaseapp.com",
    projectId: "fevm-f5006",
    storageBucket: "fevm-f5006.appspot.com",
    messagingSenderId: "510545107344",
    appId: "1:510545107344:web:47629a3e5cd4e7b1c6fb15"
  //...
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)