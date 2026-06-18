import { useState } from "react"
import {Link, useNavigate } from "react-router-dom"

const Login = () =>{
    const users = JSON.parse(localStorage.getItem("Users")) || []
    const navigate = useNavigate()


    function check(e){
        e.preventDefault()
        const currentuser = {
            email:e.target.email.value,
            password:e.target.password.value
        }

        if (users.some(user => user.email === currentuser.email && user.password === currentuser.password)){
            navigate("/")
        }else{
            alert("Wrong email or password,try again")
            e.target.reset()
        }
    }

    return (
        <>  
            <header className="flex flex-col">
                <Link to="/signup">Signup</Link>
                <Link to="/">Home page</Link>
                <Link to="/cart">Cart</Link>
            </header>
            <hr />
            <h1 className="text-3xl">Login</h1>
            <br />
            <form onSubmit={check} className="flex flex-col w-35 gap-3 pl-2.5">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required placeholder="Enter your email..." className="border-black border-2"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required placeholder="Create password..." className="border-black border-2"/>
                <button className="border-black border-2">Submit</button>
            </form>
        </>
    )
}

export default Login