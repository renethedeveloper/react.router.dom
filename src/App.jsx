import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Products from './pages/products'
import About from './pages/about'
import Home from './pages/home'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {


  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
