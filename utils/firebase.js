import firebase from 'firebase/app';
import 'firebase/auth';
//import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBVG9b-fAVC0FpPN_8eQXNsidljhLbiBKA',
  authDomain: 'flip-cards-6f3bb.firebaseapp.com',
  projectId: 'flip-cards-6f3bb',
  storageBucket: 'flip-cards-6f3bb.appspot.com',
  messagingSenderId: '860509026742',
  appId: '1:860509026742:web:4bcd05ee4356918d3ba917',
  measurementId: 'G-MENFV2B25K',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
