import Firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

// need to seed the database

//pass config here
const firebaseConfig = {
    apiKey: "AIzaSyBRPYNkBMrSJ7MAtHPlBYzGXSMKu2uGgTM",
    authDomain: "netflix-215d2.firebaseapp.com",
    projectId: "netflix-215d2",
    storageBucket: "netflix-215d2.appspot.com",
    messagingSenderId: "313709385247",
    appId: "1:313709385247:web:6590c59cd8ae266af1a72a"

};



const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(app);

export {firebase};