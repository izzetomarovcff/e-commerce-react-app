import React, { useEffect, useState } from 'react'

function HaveSaleProducts() {
  const [productdata,setProductData] = useState([])
  useEffect(()=>{
    const getData = async () =>{
      try{
        const response = await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/products.json`)
        let resData = await response.json()
        let arr = []
        for(const key in resData){
          if(resData[key].isSale){
            arr.unshift({...resData[key], id:key})
          }
        }
        setProductData(arr)
      }catch(error){
        console.log(error)
      }
    }
    getData()
    
  },[])
  return (
    <div id='salesection' className='pt-5'>
        
        <h1 className='px-3'>Sale</h1>
        <p className='px-3'>Super Summer Sale</p>
        {productdata.length == 0 ? (<div className='mx-auto text-dark'>Not Have Sale Product</div>):(
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
                    {Array.from({length: product.starCount},(_, index)=><img src="image/home/sale/star.svg" alt="" key={index} />)}
                    {Array.from({length: 5 - product.starCount},(_, index)=><img src="image/home/sale/starinactive.svg" alt="" key={index} />)}
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
        )}
        
      </div>
  )
}

export default HaveSaleProducts