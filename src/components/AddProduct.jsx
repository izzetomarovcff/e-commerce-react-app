import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, imageDb } from '../firebase'
import { Link } from 'react-router-dom'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
function AddProduct() {
    const [authUser, setAuthUser] = useState(null)
    const [productFormData, setProductFormData] = useState(
        {
            id: "", 
            isSale: false, 
            salePer: "", 
            isNew: false, 
            imgUrl: "", 
            starCount: "",
            starPoint: "", 
            brandName: "", 
            productName: "", 
            oldPrice: "",
            price: "",
            favorite: false
        }
    )
    const [img,setImg] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            // console.log(user.email) //check token status
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
        const { name, value, checked } = e.target;
        setProductFormData(prevState => ({
            ...prevState,
            [name]: ( name === "salePer" || name === "salePer" || name === "oldPrice" || name === "price" || name === "starPoint" || name === "starCount") ? (Number(value)) : (name === "isNew" || name === "isSale" ? (checked) : (value))
        }))
        console.log(productFormData)
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch("https://e-commerce-app-37874-default-rtdb.firebaseio.com/products.json?auth=" + await authUser.getIdToken(),
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(productFormData)
                })
                window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    const handleImgUpload = async(e) => {
        const selectedFile = e.target.files[0]
        

        requestDataBase(selectedFile)
    }
    const requestDataBase = async(selFile) =>{
        const imgRef =  ref(imageDb,`test/${v4()}`)
        try{
            await uploadBytes(imgRef,selFile)
            const downloadURL = await getDownloadURL(imgRef)
            setProductFormData(prevState=>({
                ...prevState,
                imgUrl: downloadURL
            }))

        }catch(error){
            console.log(error)
        }
    }
    
    
    return (
        <form onSubmit={handleSubmit} className='pt-3'>
            <h1>Create Product</h1>
            {/* <div className="mb-3 w-100">
                <label htmlFor="id" className="form-label">Id</label>
                <input type="text" name='id' className="form-control" id="id" value={productFormData.id} onChange={handleChange} autoComplete='off' placeholder='automatically' required disabled={true} />
            </div> */}
            <div className="mb-3 w-100">
                <label htmlFor="brandName" className="form-label">Brand Name</label>
                <input type="text" name='brandName' className="form-control" id="brandName" value={productFormData.brandName} onChange={handleChange} autoComplete='off' placeholder='Product Beand Name' required />
            </div>
            <div className="mb-3 w-100">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input type="text" name='productName' className="form-control" id="productName" value={productFormData.productName} onChange={handleChange} autoComplete='off' placeholder='Product Name' required />
            </div>
                       
            {productFormData.isSale ? (
                <div className="mb-3 w-100">
                    <label htmlFor="salePer" className="form-label">Discount percentage</label>
                    <input type="number" name='salePer' className="form-control" id="salePer" value={productFormData.salePer} onChange={handleChange} autoComplete='off' placeholder='Product Discount Percentage' required />
                </div>
            ) : (null)}
            {productFormData.isSale ? (
                <div className="mb-3 w-100">
                    <label htmlFor="oldPrice" className="form-label">Old Price</label>
                    <input type="number" name='oldPrice' className="form-control" id="oldPrice" value={productFormData.oldPrice} onChange={handleChange} autoComplete='off' placeholder='Before Discount Price' required />
                </div>
            ) : (null)}
            <div className="mb-3 w-100">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" name='price' className="form-control" id="price" value={productFormData.price} onChange={handleChange} autoComplete='off' placeholder={productFormData.isSale ? ("After Discount Price") : ("Product Price")} required />
            </div>
            <div className="mb-3 w-100">
                <label htmlFor="starCount" className="form-label">Star Count</label>
                <input type="number" name='starCount' className="form-control" id="starCount" value={productFormData.starCount} onChange={handleChange} autoComplete='off' placeholder='Min-0, Max-10' required />
            </div>
            <div className="mb-3 w-100">
                <label htmlFor="starPoint" className="form-label">Star Point</label>
                <input type="number" name='starPoint' className="form-control" id="starPoint" value={productFormData.starPoint} onChange={handleChange} autoComplete='off' placeholder='Min-0, Max-10' required />
            </div>
            <div className="mb-3 w-100">
                {productFormData.imgUrl == "" ?(<label htmlFor="img" className="form-label">Upload Image</label>):(null)}
                {productFormData.imgUrl == "" ? (<div className='d-flex justify-content-between'>
                    <input type="file" name='img' className="form-control w-100" id="imgUrl" onChange={handleImgUpload} />
                </div>):(null)}
                
                {productFormData.imgUrl == "" ? (null): (<div className='uploadedimg w-100 mt-3 rounded border shadow-sm'>
                    <img  src={productFormData.imgUrl} alt='productimg' className='rounded  shadow'/>
                    
                    <div className='removeuploadedfile' onClick={()=>{setProductFormData({...productFormData,imgUrl:""})}}>
                        <img src="../icons/close.svg" alt="" />
                    </div>
                </div>)}
            </div> 
            {productFormData.isNew ? (null) : (
                <div className="mb-3 w-100">
                    <div className='d-flex '><input type="checkbox" name='isSale' className="form-check" id="isSale" checked={productFormData.isSale} onChange={handleChange} autoComplete='off' placeholder='' /><p className='mb-0 ms-2'>Have Sale</p></div>
                </div>
            )}
            {productFormData.isSale ? (null) : (
                <div className="mb-3 w-100">
                    <div className='d-flex '><input type="checkbox" name='isNew' className="form-check" id="isNew" checked={productFormData.isNew} onChange={handleChange} autoComplete='off' placeholder='' /><p className='mb-0 ms-2'>New</p></div>
                </div>
            )}
            <button className='btn btn-primary w-100'>Add Product</button>
            <Link to="/admin" className='btn btn-outline-primary w-100 mt-3'>Cancel</Link>

        </form>
    )
}

export default AddProduct