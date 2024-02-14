import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import Footernavbar from '../components/Footernavbar'
function Home() {
  const [authUser, setAuthUser] = useState()
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

  return (
    <div className='homepage'>
      <div className='checksale'>
        <div className='checkgroup'>
          <h1 className='mb-3'>Fashion<br></br>Sale</h1>
          <button className='btn btn-primary px-5'>Check</button>
        </div>
      </div>
      <Footernavbar />
    </div>
  )
}

export default Home