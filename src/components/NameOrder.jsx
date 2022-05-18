import React, {Fragment } from 'react'
import styles from '../assets/NameOrder.module.css'

export const NameOrder = ({ name, setName }) => {
 const clientName = (e) => setName(e.target.value)
  return (
    <Fragment>
        <div className={styles.name}>
            <input onChange={clientName} value={name} type='text' placeholder='Nombre del cliente'/>
        </div>
    </Fragment>
  )
}
