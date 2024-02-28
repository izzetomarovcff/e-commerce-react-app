import React, { useEffect, useState } from 'react'
import Footernavbar from '../components/Footernavbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

function Cart() {
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      // console.log(user.email) //check token status
      if (user) {
      } else {
        window.location.href = "/signup"
      }
    })
    return () => {
      listen()
    }
  }, [])
  return (
    <div className='cart'>
      <div className='header bg-secondary'>My Bag</div>
      <div className='products'>
        {JSON.parse(window.localStorage.getItem("cart")) ?(
          JSON.parse(window.localStorage.getItem("cart")).map((product,productkey)=>{
            return(
              <div className='product shadow-sm' key={productkey}>
                <div className="imgdiv">
                  <img src={product.imgUrl} alt="" />
                </div>
                <div className="details">
                  <h3>{product.productName}</h3>
                </div>
              </div>
            )
          })
        ) : (
          null
        )}
      </div>
      
      <Footernavbar/>
    </div>
  )
}

export default Cart