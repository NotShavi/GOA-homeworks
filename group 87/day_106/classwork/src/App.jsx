import { useState } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import useToggle from './hooks/useToggle'

function App() {
  
  const [dark,handleDark] = useToggle(true)

  return (
    <>
      <div className={`h-screen w-screen ${dark? "bg-black" : "bg-white"}`}>
        <button onClick={handleDark} className={`text-2xl ${dark? "text-white" : "text-black"} `} >Change Mode</button>
        <p className={`text-2xl ${dark? "text-white" : "text-black"} `} >{dark? "dark mode" : "light mode" }</p>
      </div>
      
    </>
  )
}

export default App
