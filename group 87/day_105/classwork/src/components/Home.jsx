import { useState,useEffect } from "react"
import fetchdata from "./Fetchdata.js"
import {Link, useNavigate } from "react-router-dom"


const Home = () =>{
    const [items,setitems] = useState([])
    useEffect(()=>{
        fetchdata('https://fakestoreapi.com/products').then((res)=>{
        setitems(res)
        })
    },[])
    console.log(items)

    const [cart,setcart] = useState(JSON.parse(localStorage.getItem("Cart")) || [])

    function Add(item){
       

        const currentcart = [... cart]

        let exists = false

        let current = {}

        currentcart.forEach((val)=>{
            if (val.title===item.title){
                val.quantity++
                exists=true
            }
        })

        if (exists===false){
            current = {
                title:item.title,
                price:item.price,
                image:item.image,
                quantity:1
            }
            currentcart.push(current)
        }

        
        
        setcart(currentcart)
        localStorage.setItem("Cart",JSON.stringify(currentcart))
    }


    return (
        <>
        <header className="flex flex-col">
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart">Cart</Link>
        </header>
        <hr />
        <div className="grid grid-cols-4 p-3">
            {items.map((item)=>{
                return (
                    <div className="flex flex-col gap-1.5 border-black border-2 w-full items-center h-60 text-center">
                        <h2>{item.title}</h2>
                        <img src={item.image} alt="" className="w-25 h-25" />
                        <b>{item.price}$</b>
                        <button className="bg-amber-500 rounded-xl w-25 h-7" onClick={()=>{Add(item)}} >Add to cart</button>
                    </div>
                )
            })}
        </div>
        
        </>
    )
}


export default Home