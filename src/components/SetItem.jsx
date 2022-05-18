import React, { Fragment, useState } from 'react'
import { Order } from './Order.jsx'
import styles from '../assets/SetItem.module.css'


const SetItem = ({ option, setOption }) => {

    const [cuenta, setCuenta] = useState(1)
    const [order, setOrder] = useState([])
    
    const count = () => {
        setCuenta(cuenta + 1)
    }

    const disCount = () => {
        if (cuenta === 0) {
            setCuenta(0)
        }
        else
            setCuenta(cuenta - 1)
    }

    const add = () => {
        if (option.length === 0) {
            console.log('ingresa algo para pedir');
            return
        }

        if (cuenta === 0) {
            setOption([])
            setCuenta(1)
            return
        }

        const exist = order.find(x => x.item === option[0])
        if (exist){
            setOrder(
                order.map(x => x.item === option[0] ? {...exist, cantidad: exist.cantidad + cuenta} : x)
            )
        }
        else
            setOrder([
             ...order,
                { item: option[0], valor: option[1], cantidad: cuenta }
            ])
            setCuenta(1)
            setOption([])
    }

    const [editMode, setEditMode] = useState(false)
    const [index, setIndex] = useState()
    
    const edit = () => {
        cuenta === 0 ? order.splice(index, 1) : order.splice(index, 1, ({item:option[0], valor:option[1], cantidad:cuenta}))
        setEditMode(false)
        setOption([])
        setCuenta(1)
    }

    const price = (option[1]) * (cuenta)

    return (
        <Fragment>
            <div className={styles.setItem}>
                <p className={styles.text}> Item: </p>
                <p className={styles.text}> {option[0]} </p>
                <p className={styles.price}> {!isNaN(price) && '$' + price} </p>
                <button className={styles.smallButton1} onClick={() => disCount()}>-</button>
                <p className={styles.count}> {cuenta} </p>
                <button className={styles.smallButton2} onClick={() => count()}>+</button>
                {
                    editMode ? (
                        <button className={styles.add} onClick={() => edit()}> Editar </button>
                    ) : (
                        <button className={styles.add} onClick={() => add()}> Agregar </button>
                    )
                }
                
            </div>
            <Order order={order} setOrder={setOrder} setOption={setOption} setCuenta={setCuenta} setEditMode={setEditMode} setIndex={setIndex}></Order>
        </Fragment>
    )
}

export default SetItem
