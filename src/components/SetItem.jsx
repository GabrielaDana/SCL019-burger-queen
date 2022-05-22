import React, { Fragment, useState, useEffect } from 'react'
import { Order } from './Order.jsx'
import styles from '../assets/SetItem.module.css'


const SetItem = ({ option, setOption, burgers, setBurgers }) => {

    const [cuenta, setCuenta] = useState(1)
    const [order, setOrder] = useState([])
    const [warning, setWarning] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [index, setIndex] = useState()
    const [name, setName] = useState('')
    const [tables, setTables] = useState(0)
    
    const count = () => {
        setCuenta(cuenta + 1)
    }

    const disCount = () => {
        if (editMode === false) {
            cuenta === 1 ? setCuenta(1) : setCuenta(cuenta -1)
        }
        else 
        cuenta === 0 ? setCuenta(0) : setCuenta(cuenta - 1)
    }

    const add = () => {
        if (name === '' || tables === 0){
            alert('Ingresa el nombre del cliente y número de mesa')
            return
        }

        if (burgers.length >= 1){
           if (!burgers.find(burger => burger.index === '0' || burger.index === '1')){
            setWarning('Elige el tamaño de la hamburgesa')
            return
            }

            if (!burgers.find(burger => burger.index === '2' || burger.index === '3' || burger.index === '4')){
             setWarning('Selecciona la proteína de la hamburguesa')
             return
            }
        }
        
        if (option.length === 0) {
            console.log('ingresa algo para pedir');
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
            setBurgers([])
    }
    
    const edit = () => {
        cuenta === 0 ? order.splice(index, 1) : order.splice(index, 1, ({item:option[0], valor:option[1], cantidad:cuenta}))
        setEditMode(false)
        setOption([])
        setCuenta(1)
    }

    const price = (option[1]) * (cuenta)
    
  useEffect(() => {
    warning !== '' && setTimeout(() => {
        setWarning('')
    }, 2500); 
  }, [warning])

  const viewText = (
    <p className={styles.textAlert}>Selecciona algo del menú</p>
  )
  const viewOption = (
    <p className={styles.text}> {option[0]} </p>
  )
  

    return (
        <Fragment>
            <div className={styles.setItem}>
                <p className={styles.warning}>{ warning }</p>
                {option.length >= 1 ? viewOption : viewText}
                {/* <p className={styles.text}> {option.length >= 1 ? option[0] : "Selecciona algo del menú"} </p> */}
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
            <Order order={order} setOrder={setOrder} setOption={setOption} setCuenta={setCuenta} setEditMode={setEditMode} setIndex={setIndex} name={name} setName={setName} tables={tables} setTables={setTables} ></Order>
        </Fragment>
    )
}

export default SetItem
