import React, { Fragment } from 'react'
import icon from '../assets/iconDelete.svg'

export const Order = ({ order, setOrder }) => {

    const deleteItem = (i) => {
        const arrayFilter = order.filter((item, index) => index !== i)
        setOrder(arrayFilter)
    };

    return (
        <Fragment>
            <div className='order'>
                <h2 className='text'> Pedido: </h2>
                <ul>
                    {order.map((item, index) => {
                        return (
                            <li className='list' key={index}>
                                <p className='edit'> Editar </p>
                                <p> {item.item} </p>
                                <p> {item.cantidad} </p>
                                <p>$</p>
                                <p className='subtotal'>{Number(item.valor) * (item.cantidad)} </p>
                                <button onClick={() => deleteItem(index)} className='delete'>
                                    <img className='icon' src={icon} alt='ícono de eliminar' />
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    )
}

export default Order