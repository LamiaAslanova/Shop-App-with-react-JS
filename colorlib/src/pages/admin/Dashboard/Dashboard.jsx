import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Table from '../../../components/admin/Table/Table'
import { Helmet } from 'react-helmet'

const Dashboard = () => {
  const {data, setData} = useContext(MainContext)

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Table items={data}/>
    </>
  )
}

export default Dashboard