import React, { Fragment } from 'react'

export const Order = ( {order} ) => {


  return (
    <Fragment>
        <div className='order'>
            <h2>Pedido:</h2>
            <ul>
            {order.map((item, index) => <li key={index} >{item.item} {item.cantidad} $ {Number(item.valor)*(item.cantidad)}</li>)}
            </ul>
        </div>
    </Fragment>
  )
}

export default Order