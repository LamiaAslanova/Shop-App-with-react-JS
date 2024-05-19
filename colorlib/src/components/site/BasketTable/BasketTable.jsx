import React from 'react'
import BasketTableItem from '../BasketTableItem/BasketTableItem'

const BasketTable = ({ infos }) => {
    let sum = 0
    return (
        <div className="basket__table__div">
            <table className="table basket__table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        infos.map((info, index) => {
                            return (
                                <BasketTableItem info={info} key={index} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BasketTable