import React, { useContext } from 'react'
import {Formik} from 'formik'
import axios from 'axios'
import MainContext from '../../../context/context'
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet';

const Add = () => {
  const {data, setData} = useContext(MainContext)
  return (
    <div>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ image: '', name: '', price: '' }}
       validate={values => {
       }}
       onSubmit={(values, { setSubmitting }) => {
         axios.post("http://localhost:3000/products", {
          id: uuidv4(),
          image: values.image,
          name: values.name,
          price: values.price
         }).then(res=>{
          setData([...data, res.data])
          console.log(setData([...data, res.data]));
         })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="image"
             placeholder='image'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
           {errors.image && touched.image && errors.image}
           <input
             type="text"
             name="name"
             placeholder='name'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}
           <input
             type="number"
             name="price"
             placeholder='price'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
  )
}

export default Add