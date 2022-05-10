import React, { Fragment, useState, useEffect } from 'react'
import { traerData } from '../firebase_config/firebase_functions.js'
import SetItem from './SetItem.js'

const TakeOrder = () => {
  const [data,setData] = useState([])
  const [vLunch, setVLunch] = useState()
 
  const [tab, setTab] = useState(2)
  const toggleTabs = (i) => {
    setTab(i)
  };

  const [option, setOption] = useState([])
  const order = (e) => {
   setOption(e.target.value.split(','))
  }

  useEffect(() => {
    if (tab === 1){
      setVLunch()
    }
    if (tab === 2){
      setVLunch(<> <button onClick={() => toggleTabs(2)}>Hamburguesas</button>
      <button onClick={() => toggleTabs(3)}> Acompañamientos</button>
      <button onClick={() => toggleTabs(4)}> Para beber</button> </>)
    }
    traerData().then(res => {

      if (tab === 1){
        setData(res.desayuno);
      }
      
      if (tab === 2){
        setData(res.almuerzo[0].hamburguesas)
      }

      if (tab === 3){     
        setData(res.almuerzo[1].acompañamientos)
      }

       if (tab === 4){
        setData(res.almuerzo[2].bebestibles)
      } 
    })

  }, [tab])


  const menu =  data.map((element, index) => {
      return (<button onClick={(e) => order(e)} key={index} value={[element.item, element.valor]}>{element.item} {element.valor}</button>);
  })

  return (
    <Fragment>
      <h1>Vurger Queen</h1>
      <button onClick={() => toggleTabs(1)} >Desayuno</button>
      <button onClick={() => toggleTabs(2)} >Almuerzo y Cena</button>
      <ul>
        <li>
          { vLunch }
          { menu }
        </li>
      </ul>
      <SetItem  className='setItem' option={option} setOption={setOption}></SetItem>
    </Fragment>
  )
}

export default TakeOrder