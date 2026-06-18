import { useState } from "react"
import {Link, useNavigate } from "react-router-dom"

const Cart = () => {
    const [cart,setcart] = useState(JSON.parse(localStorage.getItem("Cart")) || [])


    return (
        <>
            <header className="flex flex-col">
                <Link to="/signup">Signup</Link>
                <Link to="/">Home page</Link>
                <Link to="/cart">Cart</Link>
            </header>
            <hr />
            <h1 className="text-3xl mb-4">Your cart:</h1>
            <div className="w-100">
                {cart.map((item)=>{
                    return(
                        <div className="flex flex-col gap-1.5 border-black border-2 w-full items-center h-50 text-center" key={item.title} >
                            <h2>{item.title}</h2>
                            <img src={item.image} alt="" className="w-25 h-25" />
                            <b>{item.price}$</b>
                            <i>{item.quantity}</i>
                        </div>
                    )
                })}
            </div>
            <button onClick={()=>{
                setcart([])
                localStorage.setItem("Cart",JSON.stringify([]))
                }} className="bg-amber-500 rounded-xl w-20 h-7 mt-3">Pay</button>
        </>
    )
}

export default Cart