import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxzJ_0oMIlAioNdzDyxOj8ROE7ZzByx08",
  authDomain: "netflix-clone-10f4a.firebaseapp.com",
  projectId: "netflix-clone-10f4a",
  storageBucket: "netflix-clone-10f4a.appspot.com",
  messagingSenderId: "923205317622",
  appId: "1:923205317622:web:1342cafc55ad7acbb74dd7",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
