import React, { useEffect, useState } from 'react'
import Footernavbar from '../components/Footernavbar'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

function Profile() {
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      // console.log(user.email) //check token status
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
        window.location.href = "/login"
      }
    })
    return () => {
      listen()
    }
  }, [])
  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("Sigin Out Successfully")
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className='profilepage'>
      <div className='header bg-secondary'>My Profile</div>
      <div className="profilecontainer">
        {authUser ? (
          <div className='profile rounded'>
          <div className="imgprofile shadow">
            <img src="/icons/profile.svg" alt="" />
          </div>
          <div className='email'>{authUser.email}</div>
        </div>
        ):(null)}
        
        <Link to={"/profile/orders"} className="itembox mt-4">
          <div className="info">
            <h2>My Orders</h2>
            <p className='mt-1'>Alredy have 12 orders</p>
          </div>
          <div className="to">
            <img src="/icons/chevron_right.svg" alt="" />
          </div>
        </Link>
        
        <Link to={"/profile/addresses"} className="itembox  mt-4">
          <div className="info">
            <h2>Shipping addresses</h2>
            <p className='mt-1'>3 address</p>
          </div>
          <div className="to">
            <img src="/icons/chevron_right.svg" alt="" />
          </div>
        </Link>

        <Link to={"/profile/paymentmethod"} className="itembox  mt-4">
          <div className="info">
            <h2>Payment methods</h2>
            <p className='mt-1'>Visa  **34</p>
          </div>
          <div className="to">
            <img src="/icons/chevron_right.svg" alt="" />
          </div>
        </Link>

        <Link to={"/profile/promocodes"} className="itembox  mt-4">
          <div className="info">
            <h2>Promocodes</h2>
            <p className='mt-1'>SALESUMMER</p>
          </div>
          <div className="to">
            <img src="/icons/chevron_right.svg" alt="" />
          </div>
        </Link>

        <Link to={"/profile/reviews"} className="itembox  mt-4">
          <div className="info">
            <h2>My reviews</h2>
            <p className='mt-1'>4 items</p>
          </div>
          <div className="to">
            <img src="/icons/chevron_right.svg" alt="" />
          </div>
        </Link>

        <Link to={"/profile/settings"} className="itembox mt-4">
          <div className="info">
            <h2>Settings</h2>
            <p className='mt-1'>Password, Log Out</p>
          </div>
          <div className="to">
            <img src="/icons/chevron_right.svg" alt="" />
          </div>
        </Link>
      </div>
      {/* {authUser ? (<h1 className='mx-5 text-center text-primary border border-primary rounded p-3'>You Logged In As: {authUser.email}</h1>) : (null)}
      {authUser ? (<button className='btn btn-primary mt-3 mb-5' onClick={userSignOut}>Sign Out</button>) : (null)} */}
      <Footernavbar />
    </div>
  )
}

export default Profile