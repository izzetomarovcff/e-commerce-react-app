import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

function AddCollection() {
    const [error, setError] = useState(null)
    const [authUser, setAuthUser] = useState(null)
    const [collectionFormData, setCollectionFormData] = useState(
        {
            id: "",
            collectionName: ""
        }
    )
    useEffect(() => {
        
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
                window.location.href = "/login"
            }
        })
        return () => {
            listen()
        }
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCollectionFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    function handleCheck() {
        if(collectionFormData.collectionName === ""){
            return "Enter The Category Name"
        }else{
            handleAddCollection()
            return null
        }
    }
    const handleAddCollection = async() =>{
        try {
            await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/collection.json?auth=${await authUser.getIdToken()}`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(collectionFormData)
                })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(handleCheck())
        setTimeout(() => {
            setError(null)
        }, 1500);
    }
    return (
        <form onSubmit={handleSubmit} className='pt-3'>
            <h1>Create Product</h1>
            {error ? (<div className='alert alert-danger producterror mt-3 mb-3 w-75'>{error}</div>) : (null)}
            <div className="mb-3 w-100">
                <label htmlFor="collectionName" className="form-label">Collection Name</label>
                <input type="text" name='collectionName' className="form-control" id="collectionName" value={collectionFormData.collectionName} onChange={handleChange} autoComplete='off' placeholder='Collection Name' />
            </div>
            <button className='btn btn-primary w-100'>Add Collection</button>
            <Link to="/admin" className='btn btn-outline-primary w-100 mt-3'>Cancel</Link>
        </form>
    )
}

export default AddCollection