import { useState } from 'react'

import './App.css'

function App() {
  const [mode,setmode] = useState(false)
  const [excludes,setexcludes] = useState(false)
  const [limits,setlimits] = useState(NaN)
  const [message,setmessage] = useState(false)
  const [letters,setletters] = useState([])
  const [len,setlen] = useState(0)

  function changeMode(){
    if (mode===false){
      setmode(true)
      console.log(mode)
    }else{
      setmode(false)
      console.log(mode)
    }
  }
  const [sentence, setSentence] = useState("");

  const [stats, setStats] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
  });

  const alphabet = "qwertyuiopasdfghjklzxcvbnm";

  function counter(e) {
    const value = e.target.value;
    setSentence(value);

    let characters = 0;
    let spaces = 0;
    let sentences = 0;

    if (excludes===false){
      for (let i of value) {
        if (alphabet.includes(i.toLowerCase())) {
          characters++
        } else if (i === " ") {
          spaces++
          characters++
        } else if (i === ".") {
          sentences++
        }
      }
    }
    else{
      for (let i of value) {
        if (alphabet.includes(i.toLowerCase())) {
          characters++
        } else if (i === " ") {
          spaces++
        } else if (i === ".") {
          sentences++
        }
      }
    }
    

    let words = 0
    const newvalue = value.split(" ")
    console.log(newvalue)

    for (let i of newvalue){
      if (i!==""){
        if (i.includes(",")){
          let commas = 0
          for (let x of i){
            if (x===","){
              commas++
            }
          }
          words+=commas+1
        }else{
          words++
        }
      }
    }

    

    if (sentences>0){
      words+=sentences-1
    }


    setStats({
      characters,
      words,
      sentences,
    });

    setlen(characters)

    const countlist = []
    for (let i of alphabet){
      let countlet = 0
      for (let x of value){
        if (i===x){
          countlet++
        }
      }
      if (countlet!==0){
        const infolet = {
          letter:i,
          letcount:countlet
        }
        countlist.push(infolet)
      }
    }
    setletters(countlist)
    console.log(countlist)
  }

  function counter2(sent,bool) {
    const value = sent

    setSentence(value)

    let characters = 0
    let spaces = 0
    let sentences = 0

    if (bool===false){
      for (let i of value) {
        if (alphabet.includes(i.toLowerCase())) {
          characters++
        } else if (i === " ") {
          spaces++
          characters++
        } else if (i === ".") {
          sentences++
        }
      }
    }
    else{
      for (let i of value) {
        if (alphabet.includes(i.toLowerCase())) {
          characters++
        } else if (i === " ") {
          spaces++
        } else if (i === ".") {
          sentences++
        }
      }
    }
    

    let words = 0
    const newvalue = value.split(" ")
    console.log(newvalue)

    for (let i of newvalue){
      if (i!==""){
        if (i.includes(",")){
          let commas = 0
          for (let x of i){
            if (x===","){
              commas++
            }
          }
          words+=commas+1
        }else{
          words++
        }
      }
    }

    

    if (sentences>0){
      words+=sentences-1
    }


    setStats({
      characters,
      words,
      sentences,
    });
    setlen(characters)

    const countlist = []
    for (let i of alphabet){
      let countlet = 0
      for (let x of value){
        if (i===x){
          countlet++
        }
      }
      if (countlet!==0){
        const infolet = {
          letter:i,
          letcount:countlet
        }
        countlist.push(infolet)
      }
      
    }
    setletters(countlist)
    console.log(countlist)
  }

  function changeexclude(){
    if (excludes===false){
      setexcludes(true)
      counter2(sentence,true)
    }else{
      setexcludes(false)
      counter2(sentence,false)
    }
  }

  function rendermessage(){
    if (message===false){
      setmessage(true)
    }else{
      setmessage(false)
      setlimits(NaN)
    }
  }

  return (
    <>
    <div id="container" className={`min-h-screen p-6 transition-colors duration-300 flex flex-col items-center gap-7 ${
      mode ? "bg-white " : "bg-black"
    }`} >
      <header className='w-full h-22 border-amber-50 border-0 flex items-center justify-center'>
        <div className='w-247.5 h-[44.5px] border-0 border-amber-50 flex flex-row justify-between'>
          <div className='flex items-center gap-2.5'>
            <img src="Logodark.png" alt="" />
            <h2 className={`${!mode ? "text-white" : "text-black"} text-xl`}>Character Counter</h2>
          </div>
          <button className={`bg-[#2A2B37] ${!mode ? "bg-[#2A2B37]" : "bg-[#F2F2F7]"} w-11 flex items-center justify-center rounded-lg  `} onClick={changeMode} ><img src={mode ? "moon.png " : "sun.png"} alt="" /></button>
        </div>
      </header>
      <div className='w-full h-40 border-amber-50 border-0 flex flex-col items-center justify-center m-20'>
        <h1 className={`${!mode ? "text-white" : "text-black"} text-[64px] w-150 text-center font-bold `}>Analyze your text in real-time.</h1>
      </div>
      <form className='w-full h-69.5 flex flex-col border-amber-50 border-0 items-center'>
        <input type="text" name="text" id="text" placeholder='Start typing here… (or paste your text)' onChange={counter} className={`w-247.5 h-50 rounded-xl ${!mode ? "text-white bg-[#21222C]" : "text-black bg-[#F2F2F7]"} leading-normal`} />
        {len>limits && (
          <p className='text-red-700'>Limit reached! Your text exceeds {limits} characters.</p>
        )}
        <div className='w-247.5 h-12 flex flex-row items-center gap-3.5'>
          <div className='flex gap-2.5'>
            <input type="checkbox" name="exclude" id="exclude" onChange={changeexclude} />
            <label htmlFor="exclude" className={`${!mode ? "text-white" : "text-black"}`}>Exclude spaces</label>
          </div>
          <div className='flex gap-2.5'>
            <input type="checkbox" name="limit" id="limit" onChange={rendermessage}/>
            <label htmlFor="limit" className={`${!mode ? "text-white" : "text-black"}`}>Set character limit</label>
            {message && (
              <input type='number' placeholder='Limit' className={`rounded-md w-13.75 h-7.25  ${ !mode ? "text-white border border-amber-50 " : "text-black border border-black" } `} onChange={(e)=>{setlimits(Number(e.target.value))}} />
            )}
          </div>
        </div>
      </form>
      <div className='w-247.5 h-40.5 flex flex-row border-amber-50 border-0 justify-between items-center'>
        <div className='h-40.5 w-[319.33px] rounded-xl flex flex-row justify-between items-center bg-[#D3A0FA]'>
          <div>
            <h3 className='text-[64px]'>{stats.characters}</h3>
            <h4 className='text-[20px]'>Total Characters</h4>
          </div>
          <img src="characters.png" alt="" />
        </div>
        <div className='h-40.5 w-[319.33px] rounded-xl flex flex-row justify-between items-center bg-[#FF9F00]'>
          <div>
            <h3 className='text-[64px]'>{stats.words}</h3>
            <h4 className='text-[20px]'>Word Count</h4>
          </div>
          <img src="words.png" alt="" />
        </div>
        <div className='h-40.5 w-[319.33px] rounded-xl flex flex-row justify-between items-center bg-[#FE8159]'>
          <div>
            <h3 className='text-[64px]'>{stats.sentences}</h3>
            <h4 className='text-[20px]'>Sentence Count</h4>
          </div>
          <img src="sentence.png" alt="" />
        </div>
      </div>
      <div className=' w-247.5'>
        <h2 className='text-white text-2xl'>Letter Density</h2>
        <div className="flex flex-col gap-2 mt-4">
          {letters.map((item) => (
            <div key={item.letter} className="flex items-center gap-3">
              <span className={`w-5 font-bold ${!mode ? "text-white" : "text-black"}`}>{item.letter.toUpperCase()}</span>
              <progress value={(item.letcount / len) * 100} max="100" className="flex-1"/>
              <span className={`w-5 font-bol ${ !mode ? "text-white" : "text-black" }`}>
                {item.letcount}({((item.letcount / len) * 100).toFixed(1)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
