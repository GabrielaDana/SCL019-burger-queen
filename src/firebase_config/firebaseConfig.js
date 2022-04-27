import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA828IZ_fhSbE2SIVjTJXbnplk6bDHbyyQ",
  authDomain: "burger-queen-gabriela-dana.firebaseapp.com",
  projectId: "burger-queen-gabriela-dana",
  storageBucket: "burger-queen-gabriela-dana.appspot.com",
  messagingSenderId: "891568303013",
  appId: "1:891568303013:web:dfbd42f2039cc378ee164c"
};

const app = initializeApp(firebaseConfig);




export {
  app,
}
