import React, { Fragment, useState, useEffect } from 'react'
import { traerData } from '../firebase_config/firebase_functions.js'

const TakeOrder = () => {
  //states para data
  const [drinks, setDrinks] = useState([])
  const [breakfast, setBreakfast] = useState([])
  const [sideDish, setSideDish] = useState([])
  const [hamburgersSize, setHamburgersSize] = useState([])
  const [hamburgersProtein, setHamburgersProtein] = useState([])
  const [extra, setExtra] = useState([])

  //tabs de menus
  const [tab, setTab] = useState(1)
  const toggleTabs = (i) => {
    setTab(i)
  }
  //tabs de almuerzo
  const [lunch, setLunch] = useState(1)
  const toggleLunch = (i) => {
    setLunch(i)
  }
  // trae la data de firestore
  useEffect(() => {
    traerData().then(res => {
      setDrinks(res.almuerzo[2].bebestibles);
      setBreakfast(res.desayuno);
      setHamburgersSize(res.almuerzo[0].hamburguesas.seleccion)
      setHamburgersProtein(res.almuerzo[0].hamburguesas.proteina)
      setExtra(res.almuerzo[0].hamburguesas.extras)
      setSideDish(res.almuerzo[1].acompañamientos);
    })

  }, [])

  //Contador
  const [cuenta, setCuenta] = useState(1)
  const count = () => {
    console.log('contando!!');
    setCuenta(cuenta + 1)
  }
  const disCount = () => {
    console.log('descontando!!');
    setCuenta(cuenta - 1)
  }

  const [hamburguers, setHamburgers] = useState(<></>)
  const [proteins, setProteins] = useState(<></>)
  const [extras, setExtras] = useState(<></>)
  const [viewBf, setViewBf] = useState(<></>)
  const [viewSideDish, setViewSideDish] = useState(<></>)
  const [viewDrinks, setViewDrinks] = useState(<></>)
  const [viewLunch, setViewLunch] = useState(<></>)


  const vLunch = () => {
    setViewLunch(<><button onClick={() => vHamburgers()}>Hamburguesas</button>
      <button onClick={() => vSideDish()}>Acompañamientos</button>
      <button onClick={() => vDrinks()}>Para beber</button></>)
  }
  const viewBreakfast = () => {
    setViewBf(breakfast.map((element) => {
      return (<button key={element.item}>{element.item} - {element.valor}</button>)
    }));
    toggleTabs(1)
  }

  const viewLunchButton = () => {
    vLunch();
    toggleTabs(2);
  };

  const vHamburgers = () => {
    toggleLunch(1)
    setHamburgers(hamburgersSize.map((element) => {
      return (<button key={element.tamaño}>{element.tamaño} - {element.valor}</button>)
    }));
    setProteins(hamburgersProtein.map((element, index) => {
      return (<button key={index.toString()}>{element}</button>)
    }));
    setExtras(extra.map((element) => {
      return (<button key={element.item}>{element.item} - {element.valor}</button>)
    }));
  };
  const vSideDish = () => {
    toggleLunch(2)
    setViewSideDish(sideDish.map((element) => {
      return (<button key={element.item}>{element.item} - {element.valor}</button>)
    }))
  }
  const vDrinks = () => {
    toggleLunch(3)
    setViewDrinks(drinks.map((element) => {
      return (<button key={element.item}>{element.item} - {element.valor}</button>)
    }))
  }

  return (
    <Fragment>
      <h1>Vurger Queen</h1>

      <p>contando hamburguesas: {cuenta}</p>

      <button onClick={() => disCount()}>descontando</button>
      <button onClick={() => count()}>contador</button>

      <button onClick={() => viewBreakfast()} >Desayuno</button>
      <button onClick={() => viewLunchButton()} >Almuerzo y Cena</button>

      <ul className={tab === 1 ? 'activeTabs' : 'tabs'}>
        {viewBf}
      </ul>

      <ul className={tab === 2 ? 'activeTabs' : 'tabs'}>
        {viewLunch}
        <li className={lunch === 1 ? 'activeTabs' : 'tabs'}>
          {proteins}
          {hamburguers}
          {extras}
        </li>

        <li className={lunch === 2 ? 'activeTabs' : 'tabs'}>
          {viewSideDish}
        </li>

        <li className={lunch === 3 ? 'activeTabs' : 'tabs'}>
          {viewDrinks}
        </li>
      </ul>
    </Fragment>
  )
}

export default TakeOrder