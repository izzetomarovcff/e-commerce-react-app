import React, { useEffect, useState } from 'react'

function Kids() {
    const [collectionData, setCollectionData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/collection.json`)
                let resData = await response.json()
                let arr = []
                for (const key in resData) {
                    if (resData[key].collectionFor === "kids") {
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
                    return (<div className='collection mt-3 rounded pt-4 pb-4'>{collection.collectionName}</div>)
                })
            )}
        </div>
    )
}

export default Kids