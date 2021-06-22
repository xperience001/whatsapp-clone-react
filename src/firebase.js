import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA50rQlj1D4pQlsJSUxLXEg_wnQbDJqWGE",
  authDomain: "whatsapp-clone-react-b1796.firebaseapp.com",
  projectId: "whatsapp-clone-react-b1796",
  storageBucket: "whatsapp-clone-react-b1796.appspot.com",
  messagingSenderId: "244656224361",
  appId: "1:244656224361:web:50c35d6b2af31a6ca64af8",
  measurementId: "G-B9VQ9Q0JG1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
