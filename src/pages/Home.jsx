import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import Footernavbar from '../components/Footernavbar'
import { Link } from 'react-router-dom'
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
          <a href='#salesection' className='btn btn-primary px-5'>Check</a>
        </div>

      </div>
      <div id='salesection' className='mt-5'>
        <h1 className='px-3'>Sale</h1>
        <p className='px-3'>Super Summer Sale</p>
        <div className='saleproduct '>

          <div className="product mx-3" >
            <div className='productimg'>
              <img src="image/home/sale/sale1.svg" alt="product" />
              <div className='saleper bg-primary'>-20%</div>
            </div>
            <div className='d-flex mt-2'>
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <p className='mb-0 fs-6'>(10)</p>
            </div>
            <p className='mb-1 mt-1'>Brend Name</p>
            <h6>Product Name</h6>
            <div className='d-flex'><del >15$</del><p className='text-primary ms-2 newprice'>12$</p></div>
            <div className='addfav shadow-sm'><img src="image/home/sale/heart.svg" alt="" /></div>
          </div>
          <div className="product mx-3" >
            <div className='productimg'>
              <img src="image/home/sale/sale1.svg" alt="product" />
              <div className='saleper bg-primary'>-20%</div>
            </div>
            <div className='d-flex mt-2'>
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <p className='mb-0 fs-6'>(10)</p>
            </div>
            <p className='mb-1 mt-1'>Brend Name</p>
            <h6>Product Name</h6>
            <div className='d-flex'><del >15$</del><p className='text-primary ms-2 newprice'>12$</p></div>
            <div className='addfav shadow-sm'><img src="image/home/sale/heart.svg" alt="" /></div>
          </div>
          <div className="product mx-3" >
            <div className='productimg'>
              <img src="image/home/sale/sale1.svg" alt="product" />
              <div className='saleper bg-primary'>-20%</div>
            </div>
            <div className='d-flex mt-2'>
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <p className='mb-0 fs-6'>(10)</p>
            </div>
            <p className='mb-1 mt-1'>Brend Name</p>
            <h6>Product Name</h6>
            <div className='d-flex'><del >15$</del><p className='text-primary ms-2 newprice'>12$</p></div>
            <div className='addfav shadow-sm'><img src="image/home/sale/heart.svg" alt="" /></div>
          </div>
          <div className="product mx-3" >
            <div className='productimg'>
              <img src="image/home/sale/sale1.svg" alt="product" />
              <div className='saleper bg-primary'>-20%</div>
            </div>
            <div className='d-flex mt-2'>
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <img src="image/home/sale/star.svg" alt="" />
              <p className='mb-0 fs-6'>(10)</p>
            </div>
            <p className='mb-1 mt-1'>Brend Name</p>
            <h6>Product Name</h6>
            <div className='d-flex'><del >15$</del><p className='text-primary ms-2 newprice'>12$</p></div>
            <div className='addfav shadow-sm'><img src="image/home/sale/heart.svg" alt="" /></div>
          </div>
          
          


        </div>
      </div>

      <Footernavbar />
    </div>
  )
}

export default Home