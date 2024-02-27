import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import Footernavbar from '../components/Footernavbar'
import { Link } from 'react-router-dom'
import NewProducts from '../components/NewProducts'
import HaveSaleProducts from '../components/HaveSaleProducts'
function Home() {
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
    <div className='homepage'>
      <div className='checksale'>
        <div className='checkgroup'>
          <h1 className='mb-3'>Fashion<br></br>Sale</h1>
          <a href='#salesection' className='btn btn-primary px-5'>Check</a>
        </div>
      </div>
      <HaveSaleProducts />
      <NewProducts />

      <Link to={"/shop"} className='mt-5'>
        <div className='catalog'>
          <div className='catalogtext'>New Collection</div>
        </div>
      </Link>

      <div className='othercatalog'>
        <div className='othercatalog1'>
          <Link to={"/shop"}>
            <div className='othercatalog11'>
              <div className='othercatalog11text'>Summer<br></br>sale</div>
            </div>
          </Link>

          <Link to={"/shop"}>
            <div className='othercatalog12'>
              <div className='othercatalog12text'>Black</div>
            </div>
          </Link>

        </div>
        <Link to={"/shop"}>
          <div className='othercatalog2'>
            <div className='catalog2text'>Men's<br></br>hoodies</div>
          </div>
        </Link>

      </div>

      <Footernavbar />
    </div>
  )
}

export default Home