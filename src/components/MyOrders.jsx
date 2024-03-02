import React from 'react'
import Footernavbar from './Footernavbar'

function MyOrders() {
  return (
    <div className='orderspage bg-secondary'>
        <div className='header bg-secondary'>
            <div className='backicon' onClick={() => { window.history.back() }}><img src="/icons/back.svg" alt="" /></div>

            My Orders
            <div className='right'></div>
        </div>
        <div className='orders'>
            <div className="order my-3 shadow-sm">
                <div className="heading ">
                    <h1 className="orderid">Order ID : -afiuygaksjHkgd</h1>
                    <p className='date'>05-12-2019</p>
                </div>
                <div className="quantitiyandprice mt-3">
                    <p>Quantity: <span className='text-dark'>10</span></p>
                    <p>Total Amount: <span className='text-dark'>125$</span></p>
                </div>
                <div className="details mt-3">
                    <div className='btn btn-outline-dark px-4'>Details</div>
                    <div className='status text-success'>Delivered</div>
                </div>
            </div>

            <div className="order my-3 shadow-sm">
                <div className="heading ">
                    <h1 className="orderid">Order ID : -afiuygaksjHkgd</h1>
                    <p className='date'>05-12-2019</p>
                </div>
                <div className="quantitiyandprice mt-3">
                    <p>Quantity: <span className='text-dark'>10</span></p>
                    <p>Total Amount: <span className='text-dark'>125$</span></p>
                </div>
                <div className="details mt-3">
                    <div className='btn btn-outline-dark px-4'>Details</div>
                    <div className='status text-warning'>Processing</div>
                </div>
            </div>
            <div className="order my-3 shadow-sm">
                <div className="heading ">
                    <h1 className="orderid">Order ID : -afiuygaksjHkgd</h1>
                    <p className='date'>05-12-2019</p>
                </div>
                <div className="quantitiyandprice mt-3">
                    <p>Quantity: <span className='text-dark'>10</span></p>
                    <p>Total Amount: <span className='text-dark'>125$</span></p>
                </div>
                <div className="details mt-3">
                    <div className='btn btn-outline-dark px-4'>Details</div>
                    <div className='status text-primary'>Delivered</div>
                </div>
            </div>
        </div>
        <Footernavbar/>
    </div>
  )
}

export default MyOrders