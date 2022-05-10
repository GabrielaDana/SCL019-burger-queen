import React, { Fragment, useState } from 'react'
import { Order } from './Order.js'


const SetItem = ({ option, setOption }) => {

  const [cuenta, setCuenta] = useState(1)
  const count = () => {  
    setCuenta(cuenta + 1)
  }
  const disCount = () => {
    if (cuenta === 0){
        setCuenta(0)
    }
    else
    setCuenta(cuenta - 1)
  }
  const [order, setOrder] = useState([])
  const add = () => {
    setOrder([
          ...order,
          {item: option[0], valor: option[1], cantidad: cuenta}
    ])
    setCuenta(1)
    setOption('')
  }

    return (
        <Fragment>
            <div className='setItem'
            ><p>item: { option[0] } </p>
            {/* <p>valor: { option[1] } </p> */}
            <button className='smallButton' onClick={() => disCount()}>-</button>
            <p className='count'> { cuenta } </p>
            <button className='smallButton' onClick={() => count()}>+</button>
            <button onClick={() => add()}> Agregar </button>
            </div>
            <Order order={order}></Order>
        </Fragment>
    )
}

export default SetItem
