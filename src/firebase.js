import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyB3qIj01X6MkEI-OneRAjvfxVm_3mFaLdo",
      authDomain: "webshop-d22d1.firebaseapp.com",
      databaseURL: "https://webshop-d22d1.firebaseio.com",
      projectId: "webshop-d22d1",
      storageBucket: "webshop-d22d1.appspot.com",
      messagingSenderId: "771106210934",
      appId: "1:771106210934:web:2d03203f07bbea7f45cb57",
      measurementId: "G-YQ9ECB8H06"
  };
  
  export const fb = firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
  export const dbMenuAdd = db.collection('menuItems');
  export const dbOrders = db.collection('orderItems');