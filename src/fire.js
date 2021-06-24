import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7FlPTf7BTEYJrkZx8S2oZHYlX-8JZwuU",
    authDomain: "hero-aircraft.firebaseapp.com",
    projectId: "hero-aircraft",
    storageBucket: "hero-aircraft.appspot.com",
    messagingSenderId: "981292103413",
    appId: "1:981292103413:web:91af050ac0d0dc4859f7bc"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;