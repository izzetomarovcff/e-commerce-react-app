import React from 'react'

function Footernavbar() {
  return (
    <div className='footernavbar shadow-lg'>
      <div className='navitem'>
        <img src="icons/home.png" alt="" />
        <p>Home</p>
      </div>
      <div className='navitem'>
        <img src="icons/shop.png" alt="" />
        <p>Shop</p>
      </div>
      <div className='navitem'>
        <img src="icons/cart.png" alt="" />
        <p>Cart</p>
      </div>
      <div className='navitem'>
        <img src="icons/favorites.png" alt="" />
        <p>Like</p>
      </div>
      <div className='navitem'>
        <img src="icons/profile.png" alt="" />
        <p>Profile</p>
      </div>
    </div>
  )
}

export default Footernavbar