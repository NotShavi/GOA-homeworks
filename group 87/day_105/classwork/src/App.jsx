import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Fetchdata from './components/Fetchdata.js'
import { useEffect } from 'react'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Cart from './components/Cart.jsx'


function App() {
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
