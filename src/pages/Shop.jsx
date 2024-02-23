import React, { useEffect, useState } from 'react'
import Footernavbar from '../components/Footernavbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { Routes, Route } from 'react-router-dom'
import Women from '../components/Women'
import Men from '../components/Men'
import Kids from '../components/Kids'

function Shop() {
  const [forClass, setForClass] = useState({
    women: "elementsfor",
    men: "elementsfor",
    kids: "elementsfor"
  })

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
  useEffect(()=>{
    switch(window.location.pathname){
      case "/shop/women":
        setForClass({...forClass, women: "activelementsfor", men: "elementsfor", kids: "elementsfor"})
        break;
      case "/shop/men":
        setForClass({...forClass, women: "elementsfor", men: "activelementsfor", kids: "elementsfor"})
        break;
      case "/shop/kids":
        setForClass({...forClass, women: "elementsfor", men: "elementsfor", kids: "activelementsfor"})
        break;

    }
  },[])
  const handleClick = (item) =>{
    switch(item){
      case "women":
        window.location.pathname= "/shop/women"
        break;
      case "men":
        window.location.pathname= "/shop/men"
        break;
      case "kids":
        window.location.pathname= "/shop/kids"
        break;
    }
  }
  return (
    <div className='shoppage'>
      <div className='headerbox shadow-sm rounded w-100'>
        <h1>Categories</h1>
      </div>
      <div className='selecetfor'>
        <div  className={forClass.women} onClick={()=>handleClick("women")}>Women</div>
        <div  className={forClass.men} onClick={()=>handleClick("men")}>Men</div>
        <div  className={forClass.kids} onClick={()=>handleClick("kids")}>Kids</div>
      </div>
      <Routes>
        <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/kids' element={<Kids/>}/>
      </Routes>
        
        <Footernavbar/>
    </div>
  )
}

export default Shop