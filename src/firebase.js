import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import Vue from 'vue'

import 'firebase/firestore'
Vue.use(firestorePlugin)

var firebaseConfig = {
  apiKey: "AIzaSyCPeU9SGwgInW0majW1uMEMyfSmVUf3r7s",
  authDomain: "bedfordshirebowls-1a427.firebaseapp.com",
  projectId: "bedfordshirebowls-1a427",
  storageBucket: "bedfordshirebowls-1a427.appspot.com",
  messagingSenderId: "4371704321",
  appId: "1:4371704321:web:f680a9e2aa981cafa4ae00",
  measurementId: "G-1CHCMS7M6H"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
