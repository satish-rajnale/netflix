import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase} from '../seed'

const config = {
  apiKey: "AIzaSyAPr1GtQujkoOLkZYmZ4KsIpvz4oGo1-P8",
  authDomain: "netflix-81b01.firebaseapp.com",
  projectId: "netflix-81b01",
  storageBucket: "netflix-81b01.appspot.com",
  messagingSenderId: "161239634460",
  appId: "1:161239634460:web:609289931e75cae28e05d9",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);
export { firebase };
