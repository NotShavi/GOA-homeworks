import { useState } from 'react'
import './App.css'
import Render from './Render'

function App() {
  const getData =async (url)=>{
    const info = await fetch(url)
    const data = await info.json()
    return data
  }
  
  let [profile,setProfile] = useState(null)

  const handle = async (e) =>{
    e.preventDefault()
    const user = e.target.username.value
    const information = await getData(`https://api.github.com/users/${user}`)
    setProfile(information)
    e.target.reset()
    
  }

  console.log(profile)
  return (
    <>
      

      
      <div id='main'>
      <div id="head">
        <h1 id='finder'>devfinder</h1>
        <form onSubmit={handle}>
          <input type="text" name="username" id="username" placeholder="Search GitHub username..."/>
          <button id='button1'><img src="image_2026-05-12_030837571-removebg-preview.jpg" alt="" id='logo'/></button>
          <button id='search'>Search</button>
        </form>
      </div>
      {profile && (<Render avatar_url={profile.avatar_url} login={profile.login} type={profile.type} bio={profile.bio} created_at={profile.created_at} public_repos={profile.public_repos} followers={profile.followers} following={profile.following} location={profile.location} twitter_username={profile.twitter_username} company={profile.company} url={profile.url} />)}
      </div>
    </>
  )
}

export default App
