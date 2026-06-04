import { useEffect, useState } from "react"
function App() {
  const [userslist,setUsers] = useState([])
  const signup = (e) =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value
    if (userslist.some((info)=>{return email===info.email})){
      setUsers((prevUsers) => [...prevUsers])
    }else{
      setUsers((prevUsers) => [...prevUsers,{email,password}])
    }   
  }
  return (
    <div>
    <form onSubmit={signup} >
      <input type="email" placeholder="Enter your email" name="email" />
      <input type="password" placeholder="Enter your password" name="password" />
      <button>Signup</button>
    </form>
    {userslist.map((info) =>{
        return(
          <div>
            <p>{info.email}</p>
          </div>
        )
      })
    }  
  
    </div>
  )
}

export default App