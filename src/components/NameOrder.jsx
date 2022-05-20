import React, { Fragment } from 'react'
import styles from '../assets/NameOrder.module.css'

export const NameOrder = ({ name, setName, tables, setTables }) => {
 const clientName = (e) => setName(e.target.value)


 const table = (i) => {
  setTables(i)
 }

  return (
    <Fragment>
        <div className={styles.name}>
              <button className={tables === 1 ? `${styles.tableBox} ${styles.on}` : styles.tableBox} onClick={()=> table(1)}>1</button>
              <button className={tables === 2 ? `${styles.tableBox} ${styles.on}` : styles.tableBox} onClick={()=> table(2)}>2</button>
              <button className={tables === 3 ? `${styles.tableBox} ${styles.on}` : styles.tableBox} onClick={()=> table(3)}>3</button>
              <button className={tables === 4 ? `${styles.tableBox} ${styles.on}` : styles.tableBox} onClick={()=> table(4)}>4</button>
              <button className={tables === 5 ? `${styles.tableBox} ${styles.on}` : styles.tableBox} onClick={()=> table(5)}>5</button>
              <button className={tables === 6 ? `${styles.tableBox} ${styles.on}` : styles.tableBox} onClick={()=> table(6)}>6</button>            
        </div>
        <input onChange={clientName} value={name} type='text' placeholder='Nombre del cliente'/>
    </Fragment>
  )
}
