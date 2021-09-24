// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyC2d1ZdOxcwP6ExsI38UHwE9p1j0X0yYgE",
  authDomain: "stay-connected-3bdfa.firebaseapp.com",
  projectId: "stay-connected-3bdfa",
  storageBucket: "stay-connected-3bdfa.appspot.com",
  messagingSenderId: "929009676698",
  appId: "1:929009676698:web:db46a7b3b9a6dbffb78a23",
  measurementId: "G-MJKWEMSLCG",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
