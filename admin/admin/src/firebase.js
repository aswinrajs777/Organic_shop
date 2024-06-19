// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ8xMWNXEFOgh2YAmxYkJ7334QZdBroVw",
    authDomain: "organicshop-48374.firebaseapp.com",
    databaseURL: "https://organicshop-48374-default-rtdb.firebaseio.com",
    projectId: "organicshop-48374",
    storageBucket: "organicshop-48374.appspot.com",
    messagingSenderId: "710748697714",
    appId: "1:710748697714:web:26d96869992a517301feeb",
    measurementId: "G-WE23KD5J56"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { storage };