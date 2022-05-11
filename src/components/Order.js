import React, { Fragment } from 'react' 

export const Order = ({ order }) => {


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
                                <p> $ {Number(item.valor) * (item.cantidad)} </p>
                                <p className='delete'> Eliminar </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    )
}

export default Order

// "@testing-library/jest-dom": "^5.16.4",
// "@testing-library/react": "^13.1.1",
// "@testing-library/user-event": "^13.5.0",
// "firebase": "^9.6.11",
// "firebase-admin": "^10.1.0",
// "react": "^18.0.0",
// "react-dom": "^18.0.0",
// "react-scripts": "^5.0.1",
// "web-vitals": "^2.1.4"