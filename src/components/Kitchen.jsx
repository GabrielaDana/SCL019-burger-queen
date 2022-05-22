import React, { Fragment, useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import { db } from '../firebase_config/firebaseConfig';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import image from '../assets/2.png'
import styles from '../assets/Kitchen.module.css';

export const Kitchen = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const ordersCollection = collection(db, "orders");
        const q = query(ordersCollection, orderBy("date", "desc"));
        const getOrders = onSnapshot(q, (snapshot) =>
            setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        return getOrders
    }, []);


    const preparar = async (id) => {
        const idEdit = orders.find(order => order.id === id)
        const pedido = doc(db, "orders", idEdit.id);
        await updateDoc(pedido, {
            status: 'En preparación'
        });
    }

    const entregar = async (id) => {
        const idEdit = orders.find(order => order.id === id)
        const pedido = doc(db, "orders", idEdit.id);
        await updateDoc(pedido, {
            status: 'Listo para entregar'
        });
    }
    const statusPend = orders.filter(order => order.status === 'Pendiente')
    const statusPrep = orders.filter(order => order.status === 'En preparación')

    const viewOrder = orders.map((order) => {
        return ((order.status === 'Pendiente' || order.status === 'En preparación' )) && 
            ( 
             <div className={styles.order} key={order.date}>
                 <p className={order.status === 'Pendiente' ? styles.statusColor1 : styles.statusColor2}>{order.status}</p>
                 <div className={styles.datos}>
                    <div> 
                        <p className={styles.title}> Mesa: {order.table} - Cliente: {order.name}</p>
                        {order.order.map(item => {
                            return (
                                <li key={item.item}>
                                    <div className={styles.items}>
                                    <p className={styles.cantidad}>{item.cantidad}</p>
                                    <p> x </p>
                                    <p> {item.item} </p>
                                    </div>
                                </li>
                            )
                        })}
                    </div>
                    
                </div>
                    <div className={styles.buttonStatus}>
                        {order.status === 'Pendiente' ? 
                        <button className={styles.btn} onClick={() => preparar(order.id)}>Preparar</button> :
                        <button className={styles.btn} onClick={() => entregar(order.id)}>Listo para entregar</button>}
                    </div>
                </div>
            )
        }
    )

    return (
        <Fragment>
            <Link to='/'><img className={styles.logo} alt='logo burger queen escrito con v, plant based' src={image} /></Link>
            <h2 className={styles.pedido}>Pedidos</h2>
            <p className={styles.statusPend}>Pedidos pendientes: {statusPend.length}</p>
            <p className={styles.statusPrep}>Pedidos en preparación: {statusPrep.length}</p>
            <ul className={styles.orders}>
                {viewOrder}
            </ul>
        </Fragment>
    )
}
