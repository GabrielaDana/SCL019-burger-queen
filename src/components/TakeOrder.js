import React, { Fragment, useState } from 'react'
// import { getFirestore } from "firebase/firestore";
// import { app }  from "../firebase_config/firebaseConfig.js"
// import { collection, getDocs } from "firebase/firestore";


const TakeOrder = () => {
  // const db = getFirestore(app);

  // const traerData = async(db) => {
  //   const querySnapshot = await getDocs(collection(db, "menu"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // })
  // };
  
  // traerData(db).then(res => console.log(res))


  const saludo = 'hola ---->'
  const image = 'https://i.pinimg.com/originals/4b/94/94/4b949483527c5d6793318346ec327b2f.jpg'
  const [text, setText] = useState('Soy el texto predeterminado')

  const eventoClick = () => {
    console.log('click!!');
    setText('Ahora cambié...')
  };

  const [cuenta, setCuenta] = React.useState(1)
  const count = () => {
    console.log('contando!!');
    setCuenta(cuenta + 1)
  }
  const disCount = () => {
    console.log('descontando!!');
    setCuenta(cuenta - 1)
  }

  return (
    <Fragment>
      <p>{saludo} {text}</p>
      <button onClick={() => eventoClick()}>Click</button>
      <img src={image} alt='pusheen-gaby' ></img>
      <p>contando hamburguesas: {cuenta}</p>
      <button onClick={() => count()}>contador</button>
      <button onClick={() => disCount()}>descontando</button>
    </Fragment>
  )
}

export default TakeOrder