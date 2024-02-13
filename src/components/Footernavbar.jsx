import React, { useEffect, useState } from 'react'

function Footernavbar() {
  const [iconpath,setIconPath] = useState({
    home: "icons/home.svg",
    shop: "icons/shop.svg",
    cart: "icons/cart.svg",
    favorites: "icons/favorites.svg",
    profile: "icons/profile.svg"
  })
  useEffect(()=>{
    switch(window.location.pathname){
      case "/":
        setIconPath({...iconpath, home:"icons/homeactive.svg",shop:"icons/shop.svg",cart:"icons/cart.svg",favorites:"icons/favorites.svg",profile:"icons/profile.svg"})
        break;
      case "/shop":
        setIconPath({...iconpath, home:"icons/home.svg",shop:"icons/shopactive.svg",cart:"icons/cart.svg",favorites:"icons/favorites.svg",profile:"icons/profile.svg"})
        break;
      case "/cart":
        setIconPath({...iconpath, home:"icons/home.svg",shop:"icons/shop.svg",cart:"icons/cartactive.svg",favorites:"icons/favorites.svg",profile:"icons/profile.svg"})
        break;
      case "/favorites":
        setIconPath({...iconpath, home:"icons/home.svg",shop:"icons/shop.svg",cart:"icons/cart.svg",favorites:"icons/favoritesactive.svg",profile:"icons/profile.svg"})
        break;
      case "/profile":
        setIconPath({...iconpath, home:"icons/home.svg",shop:"icons/shop.svg",cart:"icons/cart.svg",favorites:"icons/favorites.svg",profile:"icons/profileactive.svg"})
        break;
    }
    
  },[])
  const handleClick = (item) =>{
    switch(item){
      case "home":
        window.location.pathname="/"
        break;
      case "shop":
        window.location.pathname="/shop"
        break;
      case "cart":
        window.location.pathname="/cart"
        break;
      case "favorites":
        window.location.pathname="/favorites"
        break;
      case "profile":
        window.location.pathname="/profile"
        break;
    }
  }
  return (
    <div className='footernavbar shadow-lg'>
      <div className='navitem'  onClick={()=>handleClick("home")}>
        <img src={iconpath.home} alt="" />
        <p>Home</p>
      </div>
      <div className='navitem' onClick={()=>handleClick("shop")}>
        <img src={iconpath.shop} alt="" />
        <p>Shop</p>
      </div>
      <div className='navitem' onClick={()=>handleClick("cart")}>
        <img src={iconpath.cart} alt="" />
        <p>Cart</p>
      </div>
      <div className='navitem' onClick={()=>handleClick("favorites")}>
        <img src={iconpath.favorites} alt="" />
        <p>Like</p>
      </div>
      <div className='navitem' onClick={()=>handleClick("profile")}>
        <img src={iconpath.profile} alt="" />
        <p>Profile</p>
      </div>
    </div>
  )
}

export default Footernavbar