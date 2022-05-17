import React, { Fragment, useState, useEffect } from 'react'
import { traerData } from '../firebase_config/firebase_functions.js'
import SetItem from './SetItem.jsx'
import image from '../assets/2.png'
import styles from '../assets/TakeOrder.module.css'

const TakeOrder = () => {
  const [data, setData] = useState([])
  const [tab, setTab] = useState(2)
  const toggleTabs = (i) => {
    setTab(i)
  };

  const [option, setOption] = useState([])
  const [burger, setBurger] = useState([])
  const [arrayBurger, setArrayBurger] = useState([])

  const order = (e) => {
    if (tab === 2) {
      const item = e.target.value.split(',')

      setBurger([
        ...burger,
        { item: item[0], valor: item[1], index: item[2] }
      ]);
      return
    }

    setOption(e.target.value.split(','))
  }

  useEffect(() => {
  
    if (burger.length >= 1) {

      switch (burger[burger.length-1].index) {

        case '0':
          setBurger(burger.filter((element) => element.index !== '1')) 
          break;

        case '1':
          setBurger(burger.filter((element) => element.index !== '0'))
          break;
        
        case '2':
          setBurger(burger.filter((element) => element.index !== '3' && element.index !== '4'))
          break;

        case '3':
          setBurger(burger.filter((element) => element.index !== '2' && element.index !== '4'))
          break;

        case '4':
          setBurger(burger.filter((element) => element.index !== '2' && element.index !== '3'))
          break;

        case '5':
          if(burger.filter((element) => element.index === '5').length > 1){
            setBurger(burger.filter((element) => element.index !== '5'))
          } 
          break;

        case '6':
           if(burger.filter((element) => element.index === '6').length > 1){
            setBurger(burger.filter((element) => element.index !== '6'))
          } 
          break;
        
        default:
          console.log('default')
          break;
      }
    }
    let set = new Set( burger.map(JSON.stringify) )
    let unique = Array.from(set).map(JSON.parse);
    setArrayBurger(unique)

    let ordered = unique.sort((a,b)=> a.index - b.index )
    setArrayBurger(ordered)
    
  }, [burger])
  

  useEffect(() => {

    traerData().then(res => {
      switch (tab) {
        case 1:
          setData(res.desayuno);
          break;
        case 2:
          setData(res.almuerzo[0].hamburguesas);
          break;

        case 3:
          setData(res.almuerzo[1].acompañamientos);
          break;

        case 4:
          setData(res.almuerzo[2].bebestibles);
        break;

        default:
        break;
      }
    })

  }, [tab])

  const vLunch = (
    <div className={styles.setLunch}>
      <button onClick={() => toggleTabs(2)} className={tab === 2 ? styles.active : undefined}>Hamburguesas</button>
      <button onClick={() => toggleTabs(3)} className={tab === 3 ? styles.active : undefined}> Acompañamientos</button>
      <button onClick={() => toggleTabs(4)} className={tab === 4 ? styles.active : undefined}> Para beber</button>
    </div>
  )

  const lunch = tab === 2 || tab === 3 || tab === 4 ? vLunch : undefined;

  const menu = data.map((element, index) => {
    return (<button onClick={(e) => order(e)} key={index} value={[element.item, element.valor, index]}>{element.item} {element.valor}</button>);
  })

  return (
    <Fragment>
      <img className={styles.logo} alt='logo burger queen escrito con v, plant based' src={image} />
      <h1>Vurger Queen</h1>
      <div className={styles.select}>
        <button className={tab === 1 ? styles.active : undefined} onClick={() => toggleTabs(1)} >Desayuno</button>
        <button className={tab === 2 || tab === 3 || tab === 4 ? styles.active : undefined} onClick={() => toggleTabs(2)} >Almuerzo y Cena</button>
      </div>
      <ul>
        {lunch}
        <div className={styles.menu}>
          {menu}
        </div>
      </ul>
      <div>
         {arrayBurger.map((bur, index) =>(<li key={index}>{bur.item}</li>))}
      </div>
      <SetItem className={styles.setItem} option={option} setOption={setOption}></SetItem>
    </Fragment>
  )
}

export default TakeOrder