import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

function AddCategory() {
    const [error, setError] = useState(null)
    const [authUser, setAuthUser] = useState(null)
    const [categoryFormData, setCategoryFormData] = useState(
        {
            id: "",
            categoryName: "",
            categoryFor: ""
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
        setCategoryFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(categoryFormData)
    }

    function handleCheck() {
        if(categoryFormData.categoryName === ""){
            return "Enter The Category Name!"
        }else if(categoryFormData.categoryFor === ""){
            return "Please Selecet Category For!"
        }{
            handleAddCategory()
            return null
        }
    }
    const handleAddCategory = async() =>{
        try {
            await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/category.json?auth=${await authUser.getIdToken()}`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(categoryFormData)
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
            {error ? (<div className='alert alert-danger error mt-3 mb-3 w-75'>{error}</div>) : (null)}
            <div className="mb-3 w-100">
                <label htmlFor="categoryName" className="form-label">Category Name</label>
                <input type="text" name='categoryName' className="form-control" id="categoryName" value={categoryFormData.categoryName} onChange={handleChange} autoComplete='off' placeholder='Category Name' />
            </div>
            <div className="mb-3 w-100">
                <label htmlFor="categoryFor" className="form-label">Category For</label>
                <select className='form-control' id='categoryFor' name='categoryFor' value={categoryFormData.categoryFor} onChange={handleChange}>
                    <option value="">Selecet</option>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kids">Kids</option>
                </select>
            </div>
            <button className='btn btn-primary w-100'>Add Category</button>
            <Link to="/admin" className='btn btn-outline-primary w-100 mt-3'>Cancel</Link>
        </form>
    )
}

export default AddCategory