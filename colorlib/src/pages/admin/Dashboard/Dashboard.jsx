import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Table from '../../../components/admin/Table/Table'

const Dashboard = () => {
  const {data, setData} = useContext(MainContext)

  return (
    <div>
      <Table items={data}/>
    </div>
  )
}

export default Dashboard