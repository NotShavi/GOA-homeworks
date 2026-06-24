import { useState } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Card from './components/Card'
import Cart from './components/Cart'

function App() {
  
  const products = [
    {
      img:"image-waffle-desktop.jpg",
      name:"Waffle",
      fullname:"Waffle with Berries",
      price:6.50
    },
    {
      img:"image-creme-brulee-desktop.jpg",
      name:"Creme Brulee",
      fullname:"Vanilla Bean Creme Brulee",
      price:7.00
    },
    {
      img:"image-macaron-desktop.jpg",
      name:"Macaron",
      fullname:"Macaron mix of Five",
      price:8.00
    },
    {
      img:"image-tiramisu-desktop.jpg",
      name:"Tiramisu",
      fullname:"Classic Tiramisu",
      price:5.50
    },
    {
      img:"image-baklava-desktop.jpg",
      name:"Baklava",
      fullname:"Pistachio Baklava",
      price:4.00
    },
    {
      img:"image-meringue-desktop.jpg",
      name:"Pie",
      fullname:"Lemon Meringue Pie",
      price:5.00
    },
    {
      img:"image-cake-desktop.jpg",
      name:"Cake",
      fullname:"Red Velvet Cake",
      price:4.50
    },
    {
      img:"image-brownie-desktop.jpg",
      name:"Brownie",
      fullname:"Salted Caramel Brownie",
      price:5.50
    },
    {
      img:"image-panna-cotta-desktop.jpg",
      name:"Panna Cotta",
      fullname:"Vanilla Panna Cotta",
      price:6.50
    }
  ]

  const [cart,setCart] = useState([])

  return (
    <>
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='w-9/10 flex flex-row gap-5 '>
        <div className='w-6/10 flex flex-col gap-4.5'>
          <h1 className='text-5xl'>Deserts</h1>
          <div className='grid grid-cols-3 gap-4'>
            {products.map((product)=>{
              return <Card key={product.name} obj={product} cart={cart} setCart={setCart} />
            })}
          </div>
        </div>
      </div>
      <div className='w-3/10'>
        <h1>Your Cart</h1>
          <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
    </>
  )
}

export default App
