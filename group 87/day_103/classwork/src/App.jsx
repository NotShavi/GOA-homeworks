import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [time,setTime] = useState(0)
  const [running,setRunning] = useState(false)

  useEffect(()=>{
    if (running===true){
      const timer = setTimeout(() => {
        setTime(time-1)
        console.log(time)
        if (time===1){
          clearTimeout(timer)
          setRunning(false)
          return
        }
      }, 1000);
    }
    else{
      
    }
  },[running,time])
  return (
    <>
      <form>
        <input type="text" name="time" id="time" className='border-2 borger-zinc-600' onChange={(e)=>{
          setTime(Number(e.target.value))
        }}/>
        <button id='start' onClick={(e)=>{
          e.preventDefault()
          setRunning(true)}}>Start</button>
        
      </form>
      <button id='stop' onClick={()=>{setRunning(false)}}>Stop</button>
      <h1>{time}</h1>
    </>
  )
}

export default App
