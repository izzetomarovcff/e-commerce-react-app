import React, { useEffect, useState } from 'react'
import Footernavbar from '../components/Footernavbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { Routes, Route } from 'react-router-dom'
import WomenCollection from '../components/WomenCollection'
import MenCollection from '../components/MenCollection'
import KidsCollection from '../components/KidsCollection'
import CollectionProduct from '../components/CollectionProduct'
import WomenCategory from '../components/WomenCategory'
import MenCategory from '../components/MenCategory'

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
    switch(window.location.pathname.split("/")[2]){
      case "women":
        setForClass({...forClass, women: "activelementsfor", men: "elementsfor", kids: "elementsfor"})
        break;
      case "men":
        setForClass({...forClass, women: "elementsfor", men: "activelementsfor", kids: "elementsfor"})
        break;
      case "kids":
        setForClass({...forClass, women: "elementsfor", men: "elementsfor", kids: "activelementsfor"})
        break;
    }
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
      <div className='headerbox rounded w-100'>
        <h1>Categories</h1>
      </div>
      <div className='selecetfor  bg-secondary'>
        <div  className={forClass.women} onClick={()=>handleClick("women")}>Women</div>
        <div  className={forClass.men} onClick={()=>handleClick("men")}>Men</div>
        <div  className={forClass.kids} onClick={()=>handleClick("kids")}>Kids</div>
      </div>
      <Routes>
        <Route path='/women' element={<><WomenCollection/><WomenCategory/></>}/>
        <Route path='/women/*' element={<CollectionProduct/>}/>
        
        <Route path='/men' element={<><MenCollection/><MenCategory/></>}/>
        <Route path='/men/*' element={<CollectionProduct/>}/>

        <Route path='/kids' element={<><KidsCollection/></>}/>
        <Route path='/kids/*' element={<CollectionProduct/>}/>

      </Routes>
        
        <Footernavbar/>
    </div>
  )
}

export default Shop