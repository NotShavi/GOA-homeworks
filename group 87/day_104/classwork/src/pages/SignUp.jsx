import {Link, useNavigate } from "react-router-dom"


const SignUp = () =>{
    const navigate = useNavigate()
    const users = JSON.parse(localStorage.getItem("Users")) || []

    function onRegister(e){
        e.preventDefault()
        let found = false
        users.forEach((user) => {
            if (user.email === e.target.email.value){
                found=true
            }
        });
        if (found){
            e.target.reset()
        }else{
            
            const newuser = {
                email: e.target.email.value,
                password: e.target.password.value
            }
            users.push(newuser)
            localStorage.setItem("Users",JSON.stringify(users))
            navigate('/login')
        }
        console.log(found)
    }
    return (
        <>
        <form onSubmit={onRegister}>
            <input type="text" name="username" id="username" placeholder="Username" required />
            <input type="email" name="email" id="email" placeholder="Email" required/>
            <input type="password" name="password" id="password" placeholder="Password" required/>
            <button>Register</button>
        </form>
        </>
    )
}


export default SignUp