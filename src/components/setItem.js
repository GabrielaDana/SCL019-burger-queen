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
    if(option.length === 0){
        console.log('ingresa algo para pedir');
        return 
    }

    setOrder([
          ...order,
          {item: option[0], valor: option[1], cantidad: cuenta}
    ])

    setCuenta(1)
    setOption([])
  }

    return (
        <Fragment>
            <div className='setItem'>
                <p className='text'> Item: </p>
                <p className='text'> { option[0] } </p>
                <p className='price'> $ { (option[1])*(cuenta) } </p>
                <button className='smallButton1' onClick={() => disCount()}>-</button>
                <p className='count'> { cuenta } </p>
                <button className='smallButton2' onClick={() => count()}>+</button>
                <button className='add' onClick={() => add()}> Agregar </button>
            </div>
            <Order order={order}></Order>
        </Fragment>
    )
}

export default SetItem
