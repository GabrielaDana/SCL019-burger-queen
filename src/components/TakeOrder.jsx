import React, { Fragment, useState, useEffect } from 'react'
import { traerData } from '../firebase_config/firebase_functions.js'
import {Link} from 'react-router-dom'
import SetItem from './SetItem.jsx'
import image from '../assets/2.png'
import styles from '../assets/TakeOrder.module.css'

export const TakeOrder = () => {
  const [data, setData] = useState([])
  const [tab, setTab] = useState(2)
  const [option, setOption] = useState([])
  const [burgers, setBurgers] = useState([])

  const toggleTabs = (i) => {
    setTab(i)
    setBurgers([])
    setOption([])
  };


  const order = (e) => {
    if (tab === 2) {
      const item = e.target.value.split(',')
      let edit = []

      const exist = burgers.find(burger => burger.index === item[2])
      if (!exist) {
        switch (item[2]) {

          case '0':
            edit = (burgers.filter((burger) => burger.index !== '1'))
            setBurgers(([...edit, { item: item[0], valor: item[1], index: item[2] }]).sort((a, b) => a.index - b.index))
            break;

          case '1':
            edit = (burgers.filter((burger) => burger.index !== '0'))
            setBurgers(([...edit, { item: item[0], valor: item[1], index: item[2] }]).sort((a, b) => a.index - b.index))
            break;

          case '2':
            edit = (burgers.filter((burger) => burger.index !== '3' && burger.index !== '4'))
            setBurgers(([...edit, { item: item[0], valor: item[1], index: item[2] }]).sort((a, b) => a.index - b.index))
            break;

          case '3':
            edit = (burgers.filter((burger) => burger.index !== '2' && burger.index !== '4'))
            setBurgers(([...edit, { item: item[0], valor: item[1], index: item[2] }]).sort((a, b) => a.index - b.index))
            break;

          case '4':
            edit = (burgers.filter((burger) => burger.index !== '2' && burger.index !== '3'))
            setBurgers(([...edit, { item: item[0], valor: item[1], index: item[2] }]).sort((a, b) => a.index - b.index))
            break;

          default:
            setBurgers(([...burgers, { item: item[0], valor: item[1], index: item[2] }]).sort((a, b) => a.index - b.index))
            break;
        }
        return
      }

      else {
        if (burgers.length === 1) {
          setOption([])
        }
        setBurgers(burgers.filter((burger) => burger.index !== item[2]).sort((a, b) => a.index - b.index));

      }
      return
    }
    setBurgers([])
    setOption(e.target.value.split(','));
   
  }

  useEffect(() => {

    if(burgers.length >= 1){
      const product = burgers.map(burger => burger.item);
      const price = burgers.reduce(
        (previousValue, currentValue) => previousValue + Number(currentValue.valor),
        0
      );
      setOption([product.toString(), price])
    }

  }, [burgers])


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

  const lunch = (tab === 2 || tab === 3 || tab === 4) && vLunch;

  const menu = data.map((element, index) => {
    return (<button onClick={(e) => order(e)} key={index} value={[element.item, element.valor, index]}> {element.item} {element.valor}</button>);
  })

  return (
    <Fragment>
      <Link to='/'><img className={styles.logo} alt='logo burger queen escrito con v, plant based' src={image} /></Link>
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
      <SetItem className={styles.setItem} option={option} setOption={setOption} burgers={burgers} setBurgers={setBurgers}></SetItem>
    </Fragment>
  )
}