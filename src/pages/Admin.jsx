import React, { useEffect, useState  } from 'react'
import Footernavbar from '../components/Footernavbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import AddProduct from '../components/AddProduct'
import { Link, Route, Routes } from 'react-router-dom'
function Admin() {
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      // console.log(user.email) //check token status
      if (user) {
      } else {
        window.location.href = "/login"
      }
    })
    return () => {
      listen()
    }
  }, [])
  
  return (
    <div className='admin mb-4'>
      <div className=' d-flex'>
      <Link to="/admin/addproduct" className='btn btn-outline-primary w-100 mt-3 mx-1'>Product </Link>
      </div>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
      </Routes>
      <Footernavbar />
    </div>
  )
}

export default Admin