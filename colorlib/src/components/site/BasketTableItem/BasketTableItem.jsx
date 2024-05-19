import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const BasketTableItem = ({info}) => {
    const {increaseBasket, decreaseBasket, removeFromBasket} = useContext(MainContext)

    return (
        <tr>
            <td>{info.item.name}</td>
            <td>${info.item.price}</td>
            <td className='quan'><button className='left' onClick={() => decreaseBasket(info)} >-</button>{info.count}<button className='right' onClick={() => increaseBasket(info)}>+</button></td>
            <td>${info.totalPrice}</td>
            <td><button className='btn btn-danger' onClick={() => removeFromBasket(info)}>X</button></td>
        </tr>
    )
}

export default BasketTableItem