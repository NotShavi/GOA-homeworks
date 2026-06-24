
const Cart = ({cart,setCart})=>{
    console.log(cart)
    return(
        <>
        {cart.map((item)=>{
            return(
                <div>
                    <h2>{item.fullname}</h2>
                    <div>
                        <p>{item.quantity}</p>
                        <p>{item.price}</p>
                        <p>{item.price*item.quantity}</p>
                    </div>
                </div>
            )
            })}
        </>
    )
    
    
}

export default Cart