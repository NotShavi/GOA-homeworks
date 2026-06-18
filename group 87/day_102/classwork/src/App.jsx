import { useState } from 'react'
import './App.css'

function App() {
  
  

  return (
    <>
     <div className='h-screen w-screen flex justify-center items-center bg-[#f4d04e]'>
      <div className='w-100 h-135 border-0 p-4 bg-white rounded-2xl gap-2.5 shadow-[10px_8px_10px_10px_rgba(0,0,0)]'>
        <img src="illustration-article.svg" alt="" className='w-full rounded-2xl' />
        <p className='mt-2.5 bg-[#f4d04e] p-2 w-20 font-bold'>Learning</p>
        <p className='mt-2.5'>Published 21 Dec 2023</p>
        <h1 className='text-[28px] mt-2 font-bold'>HTML & CSS foundations</h1>
        <p className='text-[18px] font-light'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className='flex text-center mt-4'>
          <img src="image-avatar.webp" alt="" className='w-14.5 h-14.5' />
          <p className='mt-3.5 ml-1.5'>Greg Hooper</p>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
