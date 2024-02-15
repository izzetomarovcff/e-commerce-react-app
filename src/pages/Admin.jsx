import React, { useEffect } from 'react'
import Footernavbar from '../components/Footernavbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

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
    <div><Footernavbar/></div>
  )
}

export default Admin