import React, { useContext } from 'react'
import Cards from '../../../components/site/Cards/Cards'
import MainContext from '../../../context/context'
import './Home.css'
import {Helmet} from "react-helmet";

const Home = () => {
  const { data,sortBy, setSortBy,search,setSearch } = useContext(MainContext)

  return (
    <div className='cards'>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1>New realeased Products for Women</h1>
      <p>Who are in extremely love with eco friendly system.</p>
      <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
      <div className="sort__buttons">
        <button onClick={() => setSortBy({ field: "price", asc: true })}>Low to High</button>
        <button onClick={() => setSortBy({ field: "price", asc: false })}>High to Low</button>
        <button onClick={() => setSortBy(null)}>Default</button>
      </div>
      <Cards cards={data.filter(x => x.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
          if (!sortBy) {
            return 0
          }
          else if (sortBy.asc == true) {
            return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
          }
          else if (sortBy.asc == false) {
            return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)
          }
        })} />
    </div>
  )
}

export default Home