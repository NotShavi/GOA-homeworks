import { useState } from 'react'
import Register from './components/register.jsx'
import Authorization from './components/authorization.jsx'
import Parent from './components/parent.jsx'

function App() {

  return (
    <>
      <Register />
      <br />
      <Authorization />
      <br />
      <Parent/>
    </>
  )
}

export default App
