import React, { useContext } from 'react'
import './Card.css'
import MainContext from '../../../context/context'

const Card = ({ card }) => {
    const {addToBasket} = useContext(MainContext)

    return (
        <div className="col-3">
            <div class="card mb-4" style={{ width: "18 rem" }}>
                <img src={card.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <div className="card__data">
                        <h5 class="card-title">{card.name}</h5>
                        <p class="card-title">${card.price}</p>
                    </div>
                    <button onClick={()=>addToBasket(card)} ><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Card