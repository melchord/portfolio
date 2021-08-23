import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';

// import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Home } from './pages';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

function App() {
  const db = firebaseApp.firestore();
  db.collection('cities')
    .doc('LA')
    .set({ name: 'Los Angeles', state: 'CA', country: 'USA' })
    .then(function () {
      console.log('Document written');
    })
    .catch((error) => {
      console.log(error);
    });

  return <Home />;
}

export default App;
