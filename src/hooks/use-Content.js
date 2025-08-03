import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { db } = useContext(FirebaseContext);

  useEffect(() => {
    if (!db) {
      return;
    }

    getDocs(collection(db, target))
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log("Error fetching", target, ":", error.message);
      });
  }, [db, target]);

  return { [target]: content };
}
