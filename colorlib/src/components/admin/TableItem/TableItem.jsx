import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'

const TableItem = ({item}) => {
    const {data, setData} = useContext(MainContext)

    const deleteItem = (id) =>{
        axios.delete(`http://localhost:3000/products/${id}`).then(res=>{
          setData([...data.filter(x=>x.id!=res.data.id)])
        })
      }

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td><img width="100px" height="100px" src={item.image} alt="" /></td>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td><button onClick={()=> deleteItem(item.id)} className="btn btn-danger">Delete</button></td>
        </tr>
    )
}

export default TableItem