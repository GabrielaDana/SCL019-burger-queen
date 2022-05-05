import { db }  from "./firebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";


export const traerData = async () => {
    const querySnapshot = await getDocs(collection(db, "menu"));
    return querySnapshot.docs[0].data();
};
