import React, { Fragment, useState } from 'react'

const SetItem = () => {

  const [cuenta, setCuenta] = useState(1)
  const count = () => {  
    setCuenta(cuenta + 1)
  }
  const disCount = () => {
    if (cuenta === 0){
        setCuenta(0)
    }
    else
    setCuenta(cuenta - 1)
  }

    return (
        <Fragment>
            <p>contando hamburguesas: {cuenta}</p>
            <button onClick={() => disCount()}>descontando</button>
            <button onClick={() => count()}>contador</button>
        </Fragment>
    )
}

export default SetItem
