import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MainContext from './context/context'
import './App.css'

function App() {
  const router = createBrowserRouter(ROUTES)
  const [data, setData] = useState([])
  const [basketItems, setBasketItems] = useState(localStorage.getItem('basketItems') ? JSON.parse(localStorage.getItem('basketItems')) : [])
  const [sortBy,setSortBy]=useState(null)
  const [search,setSearch]=useState("")

  useEffect(() => {
    axios.get('http://localhost:3000/products').then(res => {
      setData([...res.data])
    })
  }, [])

  const addToBasket = (item) => {
    const target = basketItems.find(x => x.item.id == item.id)
    if (!target) {
      let newBasketItem = {
        item: item,
        count: 1,
        totalPrice: item.price
      }
      setBasketItems([...basketItems, newBasketItem])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems, newBasketItem]))
    }
    else {
      target.count += 1
      target.totalPrice += item.price
      setBasketItems([...basketItems])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems]))
    }
  }

  const increaseBasket = (item) => {
    const target = basketItems.find(x => x.item.id == item.item.id)
    target.count += 1
    target.totalPrice += item.item.price
    setBasketItems([...basketItems])
    localStorage.setItem('basketItems', JSON.stringify([...basketItems]))
  }

  const decreaseBasket = (item) => {
    const target = basketItems.find(x => x.item.id == item.item.id)
    if (target.count > 0) {
      target.count -= 1
      target.totalPrice -= item.item.price
      setBasketItems([...basketItems])
      localStorage.setItem('basketItems', JSON.stringify([...basketItems]))
    }
  }

  const removeFromBasket = (item) => {
    setBasketItems([...basketItems.filter(x => x.item.id !== item.item.id)])
    localStorage.setItem('basketItems',JSON.stringify([...basketItems.filter(x => x.item._id !== item.item._id)]))
  }

  const contextData = { data, setData, addToBasket, basketItems, setBasketItems, increaseBasket, decreaseBasket, removeFromBasket, sortBy, setSortBy, search,setSearch }

  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  )
}

export default App