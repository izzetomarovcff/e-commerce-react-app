import React, { useEffect, useState } from 'react'

function CollectionProduct() {
    const [collection, setCollection] = useState(null)
    useEffect(()=>{
        let collectionId = window.location.pathname.split("/")[3]
        const getData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/collection/${collectionId}.json`)
                let resData = await response.json()
                setCollection({...resData,id: collectionId})
            } catch (error) {
                console.log(error)
            }
        }
        getData()
        
    },[])
  return (
    <div className='collectionproducts border'>
        {collection ? (<div className='collectionname'>{collection.collectionName}</div>):(null)}
    </div>
  )
}

export default CollectionProduct