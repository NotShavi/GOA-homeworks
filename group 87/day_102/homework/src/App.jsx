import { useState } from 'react'
import './App.css'

function App() {
  const today = new Date()
  const cyear = today.getFullYear()
  const cmonth = today.getMonth() + 1
  const cday = today.getDate()
  const li = [0,31,29,31,30,31,30,31,31,30,31,30,31]

  function calculate(year, month, day) {

    if (year === 0 ||month === 0 ||day === 0 ||Number.isNaN(year) ||Number.isNaN(month) ||Number.isNaN(day)) {
      setyear("- -");
      setmonth("- -");
      setday("- -");
      return;
    }

    let years = cyear - year;
    let months = cmonth - month;
    let days = cday - day;

    if (days < 0) {
        months--;
        const previousMonth = new Date(cyear, cmonth - 1, 0).getDate();
        days += previousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years===NaN || months===NaN || days===NaN){
      setyear("- -")
      setmonth("- -")
      setday("- -")
      return
    }

      setyear(years)
      setmonth(months)
      setday(days)
    

    return [years, months, days];
  }

  const [uyear,setyear] = useState("- -")
  const [umonth,setmonth] = useState("- -")
  const [uday,setday] = useState("- -")

  return (
    <>
      <div id="container">
      <div id="main">
        <form onSubmit={(e)=>{
          e.preventDefault()
          calculate(Number(e.target.year.value),Number(e.target.month.value),Number(e.target.day.value))
          e.target.reset()
        }}>
          <div id="formdiv">
          <div className="inps">
            <label for="day" className="label">DAY</label>
            <input type="text" name="day" placeholder="DD" id="day" className="inp"/>
          </div>
          <div className="inps">
            <label for="month" className="label">MONTH</label>
            <input type="text" name="month" placeholder="MM" id="month" className="inp"/>
          </div>
          <div className="inps">
            <label for="year" className="label">YEAR</label>
            <input type="text" name="year" placeholder="YYYY" id="year" className="inp"/>
          </div>
        </div>
          <div id="line">
            <hr/>
            <button id="img"></button>
          </div>
        </form>
        
        <div id="nums">
          <div className="dates">
            <h1 className="num" id="yearnum">{uyear}</h1>
            <h2 className="name">years</h2>
          </div>
          <div className="dates">
            <h1 className="num" id="monthnum">{umonth}</h1>
            <h2 className="name">months</h2>
          </div>
          <div className="dates">
            <h1 className="num" id="daynum">{uday}</h1>
            <h2 className="name">days</h2>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
