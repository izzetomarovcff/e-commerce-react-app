import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='homepage'>
      <h1 className='mx-5 text-center text-primary border border-primary rounded p-3'>Home page will be here soon</h1>
      <Link to="/signup" className='btn btn-primary mt-3 mb-5'>Sign Up Now</Link>
    </div>
  )
}

export default Home