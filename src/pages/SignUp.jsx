import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function SignUp() {
  const [error, setError] = useState(null)
  const [resError, setReserror] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  //set signup params. state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  //check inputs correct or incorrect
  function handleCheck() {
    if(formData.name.length<1){
      setReserror(null)
      return "Invalid Full Name (in Full Name must have characters!)";
    } else if (formData.name.includes(".") || formData.name.includes(",")) {
      setReserror(null)
      return "Invalid Full Name (in Full Name must not have this (. ,) characters!)";
    } else if(formData.phone == ""){
      setReserror(null)
      return "Invalid Phone Number";
    } else if(formData.email.length<1){
      setReserror(null)
      return "E-mail cannot be left blank!"
    }else if (formData.password.length < 6) {
      setReserror(null)
      return "Password must be at least 6 characters long!"
    } else {
      setLoading(true)
      setReserror(null)
      let { email, password } = formData
      signup(email, password)
      return null
    }
  }

  //senda data to database
  const signup = async (email, password) => {
    try {
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + "AIzaSyD6HhaVEgy7ElONyzbj4s4WQo9yfZ9OnBk",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        })
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      } else {
        fetch("https://e-commerce-app-37874-default-rtdb.firebaseio.com/users.json",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          })
        window.location.href = "/"
        const responseData = await response.json();
        const token = responseData.idToken; //get token
        console.log(token); //console token
      }
    } catch (err) {
      if (err.message == "EMAIL_EXISTS") {
        setReserror("The email address is already in use by another account.")
        setLoading(false)
      } else if (err.message == "OPERATION_NOT_ALLOWED") {
        setReserror("Password sign-in is disabled for this project.")
        setLoading(false)
      } else if (err.message == "TOO_MANY_ATTEMPTS_TRY_LATER") {
        setReserror("We have blocked all requests from this device due to unusual activity. Try again later.")
        setLoading(false)
      } else {
        setReserror("An unexpected error occurred!")
        setLoading(false)
      }
    }
  }
  
  //form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(handleCheck())
  }

  return (
    <div className='signup'>
      {loading ? (
        <div className='loading-overlay bg-secondary'>
          <div className="spinner-border text-primary border-5" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (null)}
      <h1 className=''>Sign Up</h1>
      {error ? (<p className='alert alert-warning w-100 mt-4'>{error}</p>) : (null)}
      {resError ? (<p className='alert alert-danger w-100 mt-4'>{resError}</p>) : (null)}
      <form onSubmit={handleSubmit} className='mt-4'>
        <div className="mb-3 w-100">
          <label htmlFor="fullname" className="form-label">Full Name</label>
          <input type="text" name='name' className="form-control" id="fullname" value={formData.name} onChange={handleChange} autoComplete='off' placeholder='Izzat Omarov' />
        </div>
        <div className="mb-3 w-100">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="tel" name='phone' className="form-control" id="phone" value={formData.phone} onChange={handleChange} autoComplete='off' placeholder='0709876543'  />
        </div>
        <div className="mb-3 w-100">
          <label htmlFor="email" className="form-label">E-Mail</label>
          <input type="email" name='email' className="form-control" id="email" value={formData.email} onChange={handleChange} autoComplete='off' placeholder='izzetomarovcff@gmail.com'  />
        </div>
        <div className="mb-3 w-100">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" id="password" value={formData.password} onChange={handleChange} autoComplete='off' placeholder='min 6 chars'  />
        </div>
        <button type='submit' className='btn btn-primary w-100 mt-3'>SIGN UP</button>
        <Link to="/login" className='btn btn-outline-primary w-100 mt-3'>Already have an account?</Link>
      </form>
    </div>
  )
}

export default SignUp