import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log("submitted")
  }
  return (
    <div className='signup'>
      {loading?(
        <div className='loading-overlay'>
          <div className="spinner-border text-primary border-5" role="status">
            <span className="sr-only"></span>
          </div>
          <p className='text-primary fs-1 mt-2'>coming soon</p>
          <Link to="/" className='btn btn-outline-primary mt-3'>Go Home Page</Link>
        </div>
        
      ):(null)}
      <h1 className=''>Log In</h1>
      <form onSubmit={handleSubmit} className='mt-4'>
        <div className="mb-3 w-100">
          <label htmlFor="email" className="form-label">E-Mail</label>
          <input type="email" name='email' className="form-control" id="email" value={formData.email} onChange={handleChange} autoComplete='off' placeholder='izzetomarovcff@gmail.com' required />
        </div>
        <div className="mb-3 w-100">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" id="password" value={formData.password} onChange={handleChange} autoComplete='off' placeholder='min 6 chars' required />
        </div>
        <button type='submit' className='btn btn-primary w-100 mt-3'>LOG IN</button>
        <Link to="/signup" className='btn btn-outline-primary w-100 mt-3'>Don't have an account?</Link>
      </form>
    </div>
  )
}

export default LogIn