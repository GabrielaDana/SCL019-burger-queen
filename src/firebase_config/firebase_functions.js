import { db }  from "./firebaseConfig.js"
import { collection, getDocs } from "firebase/firestore";


export const traerData = async () => {
    const querySnapshot = await getDocs(collection(db, "menu"));
    // console.log(querySnapshot.docs[0].data().almuerzo[1].acompañamientos[1].item);
    return querySnapshot.docs[0].data();
    // console.log(querySnapshot)
};
