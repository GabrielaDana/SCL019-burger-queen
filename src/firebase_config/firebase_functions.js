import { db }  from "./firebaseConfig.js"
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";


export const traerData = async () => {
    const querySnapshot = await getDocs(collection(db, "menu"));
    return querySnapshot.docs[0].data();
};

export const sendData =  async (name, tables, order, total ) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), {
          name: name,
          table: tables,
          order: order,
          total: total,
          status: 'Pendiente',
          date: Timestamp.fromDate(new Date()),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}