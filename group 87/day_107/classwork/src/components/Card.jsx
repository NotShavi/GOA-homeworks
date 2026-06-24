import { useState } from "react"
import addCart from "../assets/icon-add-to-cart.svg"

const Card = ({obj,cart,setCart}) =>{
    const [clicked,setClicked] = useState(false)
    return(
        <div className="relative flex flex-col gap-1.5">
            <img src={obj.img} alt="" className="w-full h-6/10 mb-4.5" />
            <button className="flex flex-row border-2 p-2 rounded-[20px] gap-2 cursor-pointer absolute bg-white bottom-30 left-14 " onClick={()=>{
                if (cart.find(val=>val.name===obj.name)){
                    setCart(cart.filter(item=>item.name!==obj.name))
                    obj.quantity+=1
                    setCart(prev => [...prev, obj])
                }else{
                    obj.quantity=1
                    setCart(prev => [...prev, obj])
                    console.log(obj)
                }
                }} >
                {cart.find(val=>val.name===obj.name && val.quantity>=1) ? (<p>Hello</p>) : 
                (   <>
                        <img src={addCart} alt=""  />
                        <p>Add to Cart</p>
                    </>
                )}
                
            </button>
            <p>{obj.name}</p>
            <h3>{obj.fullname}</h3>
            <h4>{obj.price}</h4>
        </div>
    )
}

export default Card