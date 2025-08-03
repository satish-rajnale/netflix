import { createContext } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children, firebase }) => {
  const auth = getAuth(firebase);
  const db = getFirestore(firebase);
  
  return (
    <FirebaseContext.Provider value={{ firebase, auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
};
