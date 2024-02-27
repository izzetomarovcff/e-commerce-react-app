import React, { useEffect, useState } from 'react'
import Footernavbar from './Footernavbar'

function ProductDetails() {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        let productId = window.location.pathname.split("/")[3]

        const getData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/products/${productId}.json`)
                let resData = await response.json()
                setProduct({ ...resData, id: productId })
                console.log(resData)
            } catch (error) {
                console.log(error)
            }
        }
        getData()

    }, [])
    const shareproduct = async ()=>{
        try{
            if(navigator.share){
                await navigator.share({
                    title: `${product.productName} (${product.brandName})`,
                    url: window.location.href
                })
            }

        }catch(error){

        }
    }
    return (
        <div className='productdetails'>
            <div className='productheader bg-secondary'>
                <div className='backicon' onClick={() => { window.history.back() }}><img src="/icons/back.svg" alt="" /></div>
                {product ? (<div className='productname'>{product.productName}</div>) : (null)}
                <div className='shareicon' onClick={shareproduct}><img src="/icons/share.svg" alt="" /></div>
            </div>
            {product ? (
                <div className="product">
                    <div className='productimg'><img src={product.imgUrl} alt="" /></div>
                    <div className="sizeandfav"></div>
                </div>
            ) : (null)}



        </div>
    )
}

export default ProductDetails