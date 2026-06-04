import { use, useEffect, useState } from 'react'

import './App.css'

function App() {

  async function fetchData(data) {
    const info = await fetch(data)
    const info2 = await info.json()
    return info2
  }

  const [cart,setcart] = useState(JSON.parse(localStorage.getItem("Cart")) || [])
  const [items,setitems] = useState([])

  useEffect(()=>{
      fetchData('https://fakestoreapi.com/products')
        .then(res => {
          console.log(res)
          setitems(res)

        })
    },[])
  
  useEffect(()=>{
              localStorage.setItem("Cart", JSON.stringify(cart))
  },[cart])
  return (
    <>
      <div id='items'>
      {
        items.map((item,index) =>{
          return(
            <div className='items'>
              <img src={item.image} alt="" className='image'/>
              <h3 className='title'>{item.title}</h3>
              <p className='price'>{item.price}</p>
              <button className='button' onClick={()=>{
                setcart([...cart,item])
                console.log(cart)
                // localStorage.setItem("Cart", JSON.stringify(cart))
                }}>Add to cart</button>
            </div>
          )
        })
      }
   
      </div>
      <hr />
      <div id='cart'>
        <h2 id='carttitle'>Your Cart:</h2>
        <div id='cartitems'>
          {
            cart.map((item,index) =>{
            return(
              <div className='cartitem'>
                <img src={item.image} alt="" className='item image'/>
                <h3 className='item title'>{item.title}</h3>
                <p className='item price'>{item.price}</p>
                <button className="button" onClick={() => {
                    const updatedCart = cart.filter((val) => val.id !== item.id)
                    setcart(updatedCart)
                    // localStorage.setItem("Cart", JSON.stringify(cart))
                  }}>
                  Remove
                </button>
              </div>
            )
          })
          }

        </div>
        <button id='pay' onClick={()=>{
          setcart([])
          localStorage.setItem("Cart", JSON.stringify(cart))
        }}>Pay for the items</button>
      </div>
    </>
  )
}

export default App
