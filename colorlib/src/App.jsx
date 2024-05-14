import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MainContext from './context/context'

function App() {
  const router = createBrowserRouter(ROUTES)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/products').then(res => {
      setData([...res.data])
    })
  }, [])

  const contextData = { data }

  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  )
}

export default App