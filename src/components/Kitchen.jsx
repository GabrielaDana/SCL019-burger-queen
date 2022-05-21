import React, { Fragment, useState, useEffect } from 'react'
import { db } from '../firebase_config/firebaseConfig';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
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

    const viewOrder = orders.map((order) => {
        // return ((order.status === 'Pendiente' || order.status === 'En preparación' )) && 
       return (order.status) && 
            ( 
             <div className={styles.order} key={order.date}>
                    <p>Mesa: {order.table} - Cliente:{order.name}</p>
                    <div>
                        {order.order.map(item => {
                            return (
                                <li key={item.item}>
                                    <p>{item.cantidad} x {item.item} </p>
                                </li>
                            )
                        })}
                    </div>
                    <p>Total: ${order.total}</p>
                    <p>{order.status}</p>
                    <div className={styles.buttonStatus}>
                        {order.status === 'Pendiente' ? 
                        <button onClick={() => preparar(order.id)}>Preparar</button> :
                        <button onClick={() => entregar(order.id)}>Listo para entregar</button>}
                    </div>
                </div>
            )
        }
    )

    return (
        <Fragment>
            <h2>Kitchen</h2>
            <ul className={styles.orders}>
                {viewOrder}
            </ul>
        </Fragment>
    )
}
