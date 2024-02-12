import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
function Home() {
  const [authUser, setAuthUser] = useState()
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)

      } else {
        setAuthUser(null)
        window.location.href = `/signup`
      }
    })
    return () => {
      listen()
    }
  },[])
  const userSignOut = () =>{
    signOut(auth).then(()=>{
        console.log("Sigin Out Successfully")
    }).catch((error)=>{
        console.log(error)
    })
}
  return (
    <div className='homepage'>
      <h1 className='mx-5 text-center text-primary border border-primary rounded p-3'>Home page will be here soon</h1>
      <button className='btn btn-primary mt-3 mb-5' onClick={userSignOut}>Sign Out</button>
    </div>
  )
}

export default Home