import { Link, useNavigate } from "react-router-dom"

const Login = () =>{
    const navigate = useNavigate()
    const users = JSON.parse(localStorage.getItem("Users")) || []

    function onLogin(e){
        e.preventDefault()
        
        let found = users.some((user)=>{return user.email === e.target.email.value && user.password === e.target.password.value})
        if (found){
            navigate("/")
        }else{
            alert("Wrong inputs")
            e.target.reset()
        }
    }
    return (
        <>
        <form onSubmit={onLogin}>
            <input type="email" name="email" id="email" placeholder="Email" required/>
            <input type="password" name="password" id="password" placeholder="Password"  required/>
            <button>Login</button>
        </form>
        </>
    )
}

export default Login