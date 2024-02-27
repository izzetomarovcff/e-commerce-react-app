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
    const shareproduct = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: `${product.productName} (${product.brandName})`,
                    url: window.location.href
                })
            }

        } catch (error) {

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
                    <div className="sizeandfav mt-2">
                        <select className='size form-control w-75 '>
                            <option value="">Size</option>
                        </select>
                        <div className='addfavpd shadow'>
                            <img src="/image/home/sale/heart.svg" alt="" />
                        </div>
                    </div>
                    <div className="brandandprice">
                        <div className="brand"><h1>{product.brandName}</h1></div>
                        <div className="price">{product.oldPrice ? (<del><h1>${product.oldPrice}</h1></del>) : (null)} <h1 className='ms-2 text-primary'>${product.price}</h1></div>
                    </div>
                    <p className='productname mt-1'>{product.productName}</p>
                    <div className='d-flex mt-1 stars'>
                        {Array.from({ length: product.starCount }, (_, index) => <img src="/image/home/sale/star.svg" alt="" key={index} />)}
                        {Array.from({ length: 5 - product.starCount }, (_, index) => <img src="/image/home/sale/starinactive.svg" alt="" key={index} />)}
                        <p className='mb-0 fs-6'>({product.starPoint})</p>
                    </div>
                    <p className='longtext mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam veritatis commodi ipsum ea nihil dolores, dolorem, quasi quod maxime, voluptatum alias eos ex eligendi quo. Suscipit ex rerum dolorem assumenda.</p>
                    <div className='footer bg-white shadow-lg'>
                        <button className='btn btn-lg btn-primary w-75'>Add To Cart</button>
                    </div>
                </div>
            ) : (null)}



        </div>
    )
}

export default ProductDetails