import React, { Fragment, useState } from 'react'
import icon from '../assets/iconDelete.svg'
import styles from '../assets/Order.module.css'
import { NameOrder}  from './NameOrder.jsx'

export const Order = ({ order, setOrder, setOption, setCuenta, setEditMode, setIndex}) => {
    
    const [name, setName] = useState('')
    const deleteItem = (i) => {
        setOrder(order.filter((item, index) => index !== i))
    };

    const edit = (item, index) => {
        setIndex(index)
        setEditMode(true)
        setCuenta(item.cantidad)
        setOption([item.item, item.valor])
    }
  
    const total = order.reduce(
        (previousValue, currentValue) => previousValue + currentValue.valor * currentValue.cantidad,
        0 
    );
    
    return (
        <Fragment>
            <NameOrder name={name} setName={setName}></NameOrder>
            <div className={styles.order}>
                <h2>{name}</h2>
                <h2 className={styles.text}> Pedido: </h2>
                <ul className={styles.ul}>
                    {order.map((item, index) => {
                        return (
                            <li className={styles.list} key={index}>
                                <button className={styles.editButton} onClick={() => edit(item, index)}>
                                    <p className={styles.edit}> Editar </p>
                                </button>
                                <p> {item.item} </p>
                                <p> {item.cantidad}</p>
                                <p>$</p>
                                <p className={styles.subtotal}>{Number(item.valor) * (item.cantidad)} </p>
                                <button className={styles.delete} onClick={() => deleteItem(index)}>
                                    <img className={styles.icon} src={icon} alt='ícono de eliminar' />
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.total}>
                <p className={styles.totalText}>Total: $ {total}</p>
                <button>Enviar a cocina</button>
            </div>
        </Fragment>
    )
}

export default Order