import { useState } from "react"
import {Link, useNavigate } from "react-router-dom"

const Signup = () =>{
    const navigate = useNavigate()
    const [users,setusers] = useState(JSON.parse(localStorage.getItem("Users")) || [])

    function check(e){
        e.preventDefault()
        const users2 = [... users]
        const currentuser = {
            email:e.target.email.value,
            password:e.target.password.value
        }

        if (users2.some(user=>user.email === currentuser.email)){
            alert("Same email registered,try new email")
            e.target.reset()
        }else{
            users2.push(currentuser)
            setusers(users2)
            localStorage.setItem("Users",JSON.stringify(users2))
            navigate("/login")
        }
    }

    return (
        <>  
            <header className="flex flex-col">
                <Link to="/">Home page</Link>
                <Link to="/login">Login</Link>
                <Link to="/cart">Cart</Link>
            </header>
            <hr />
            <h1 className="text-3xl mb-4">Signup</h1>
            <br />
            <form onSubmit={check} className="flex flex-col w-35 gap-3 pl-2.5">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" required placeholder="Create username..." className="border-black border-2" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required placeholder="Enter your email..." className="border-black border-2"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required placeholder="Create password..." className="border-black border-2"/>
                <button className="border-black border-2">Submit</button>
            </form>
        </>
    )
}

export default Signup