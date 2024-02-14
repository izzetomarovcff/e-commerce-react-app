import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import Footernavbar from '../components/Footernavbar'
import productdata from '../static/ProductData'
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
      <div id='salesection' className='pt-5'>
        <h1 className='px-3'>Sale</h1>
        <p className='px-3'>Super Summer Sale</p>
        <div className='saleproduct '>
          {productdata.filter(product => product.isSale).map((product, keyproduct) => {
            return (
              <div className="product mx-3" key={keyproduct} >
                <div className='productimg'>
                  <img src={product.imgUrl} alt="product" />
                  {product.isSale ? (<div className='saleper bg-primary'>-{product.salePer}%</div>) : (null)}
                  {product.isNew ? (<div className='saleper bg-dark'>new</div>) : (null)}
                </div>
                <div className='d-flex mt-2'>
                  {product.starCount.map((element, keystar) => {
                    return (<img src="image/home/sale/star.svg" alt="" key={keystar} />)
                  })}
                  <p className='mb-0 fs-6'>({product.starPoint})</p>
                </div>
                <p className='mb-1 mt-1'>{product.brandName}</p>
                <h6>{product.productName}</h6>
                <div className='d-flex'>{product.isSale ? (<del className='me-2' >{product.oldPrice} $</del>) : (null)}<p className='text-primary newprice'>{product.price} $</p></div>
                <div className='addfav shadow-sm'><img src="image/home/sale/heart.svg" alt="" /></div>
              </div>
            )
          })}
        </div>
      </div>
      <div id='salesection' className='pt-5'>
        <h1 className='px-3'>New</h1>
        <p className='px-3'>You've never seen it before!</p>
        <div className='saleproduct '>
        {productdata.filter(product => product.isNew).map((product, keyproduct) => {
            return (
              <div className="product mx-3" key={keyproduct} >
                <div className='productimg'>
                  <img src={product.imgUrl} alt="product" />
                  {product.isSale ? (<div className='saleper bg-primary'>-{product.salePer}%</div>) : (null)}
                  {product.isNew ? (<div className='saleper bg-dark'>NEW</div>) : (null)}
                </div>
                <div className='d-flex mt-2'>
                  {product.starCount.map((element, keystar) => {
                    return (<img src="image/home/sale/starinactive.svg" alt="" key={keystar} />)
                  })}
                  <p className='mb-0 fs-6'>({product.starPoint})</p>
                </div>
                <p className='mb-1 mt-1'>{product.brandName}</p>
                <h6>{product.productName}</h6>
                <div className='d-flex'>{product.isSale ? (<del className='me-2' >{product.oldPrice} $</del>) : (null)}<p className='text-dark newprice'>{product.price} $</p></div>
                <div className='addfav shadow-sm'><img src="image/home/sale/heart.svg" alt="" /></div>
              </div>
            )
          })}
        </div>
      </div>

      <Footernavbar />
    </div>
  )
}

export default Home