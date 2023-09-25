import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"


const Navbar = () => {
  return (
   <nav id='nav'>
   
    <Link to= "/">HOME </Link>
   
    <Link to= "/about">ABOUT</Link>
   
    <Link to= "/products">PRODUCTS</Link>
    
   </nav>
  )
}

export default Navbar
