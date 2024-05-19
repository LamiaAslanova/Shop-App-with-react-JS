import React, { useContext } from 'react'
import BasketTable from '../../../components/site/BasketTable/BasketTable'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet'

const Basket = () => {
  const { basketItems } = useContext(MainContext)

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <BasketTable infos={basketItems} />
    </>
  )
}

export default Basket