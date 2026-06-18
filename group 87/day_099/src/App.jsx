import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="cards">
        <Card title="Animation" image="Group.png" text="Learn the latest animation techniques to create stunning motion design and captivate your audience."/>
        <Card title="Design" image="Group1.png" text="Create beautiful, usable interfaces to help shape the future of how the web looks."/>
        <Card title="Photography" image="Group2.png" text="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."/>
        <Card title="Crypto" image="Group3.png" text="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."/>
        <Card title="Business" image="Group4.png" text="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."/>
      </div>
      
    </>
  )
}

export default App
