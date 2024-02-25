import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function KidsCategory() {
    const [categoryData, setcategoryData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/category.json`)
                let resData = await response.json()
                let arr = []
                for (const key in resData) {
                    if (resData[key].categoryFor === "kids") {
                        arr.push({ ...resData[key], id: key })
                    }
                }
                setcategoryData(arr)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    return (
        <div className='categories'>
            {categoryData.length == 0 ? (null) : (
                categoryData.map((category, categorykey) => {
                    return (<Link key={categorykey} to={`/shop/kids/category/${category.id}`} className='category mt-3 rounded pt-4 pb-4'>{category.categoryName}</Link>)
                })
            )}
        </div>
    )
}

export default KidsCategory
