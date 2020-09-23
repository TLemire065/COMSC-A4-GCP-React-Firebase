import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCx96dmRUQNmNkz2CMwWK8B4cdF0bqKcSA",
    authDomain: "comsc-a4.firebaseapp.com",
    databaseURL: "https://comsc-a4.firebaseio.com",
    projectId: "comsc-a4",
    storageBucket: "comsc-a4.appspot.com",
    messagingSenderId: "674237363013",
    appId: "1:674237363013:web:946d75718158fda933442c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };
  
