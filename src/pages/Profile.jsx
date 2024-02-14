import React, { useEffect, useState } from 'react'
import Footernavbar from '../components/Footernavbar'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'

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
    <div>
      {authUser ? (<h1 className='mx-5 text-center text-primary border border-primary rounded p-3'>You Logged In As: {authUser.email}</h1>) : (null)}
      {authUser ? (<button className='btn btn-primary mt-3 mb-5' onClick={userSignOut}>Sign Out</button>) : (null)}
      <Footernavbar />
    </div>
  )
}

export default Profile