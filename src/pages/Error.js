import React from "react"
import { Link } from "react-router-dom"
import "../css/error.css"

const Error = () => {
  return (
    <div className='wrapper'>
      <h1>404</h1>
      <p>page not found</p>
      <Link to='/'>back home</Link>
    </div>
  )
}

export default Error
