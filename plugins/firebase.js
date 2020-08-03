/* ~/plugins/firebase.js

import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDdgTDipTC59T_pLaJHl6mUOczQMROQ2-s",
    authDomain: "lagunaweb-849dd.firebaseapp.com",
    databaseURL: "https://lagunaweb-849dd.firebaseio.com",
    projectId: "lagunaweb-849dd",
    storageBucket: "lagunaweb-849dd.appspot.com",
    messagingSenderId: "1069535913041",
    appId: "1:1069535913041:web:4f2c11cfa15fe308024470",
    measurementId: "G-YXJPYR0F6H"
  };
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const auth = firebase.auth()
export default firebase */
