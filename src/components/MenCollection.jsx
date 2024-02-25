import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MenCollection() {
    const [collectionData, setCollectionData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/collection.json`)
                let resData = await response.json()
                let arr = []
                for (const key in resData) {
                    if (resData[key].collectionFor === "men") {
                        arr.push({ ...resData[key], id: key })
                    }
                }
                setCollectionData(arr)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    return (
        <div className='collections'>
            {collectionData.length == 0 ? (null) : (
                collectionData.map((collection, collectionkey) => {
                    return (
                        <Link key={collectionkey} to={`/shop/men/collection/${collection.id}`} className='collection mt-3 rounded pt-5 pb-5'>
                            {collection.collectionName}
                        </Link>
                    )
                })
            )}
        </div>
    )
}

export default MenCollection