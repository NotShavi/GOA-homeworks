const today = new Date()
const cyear = today.getFullYear()
const cmonth = today.getMonth() + 1
const cday = today.getDate()
const li = [0,31,29,31,30,31,30,31,31,30,31,30,31]



const form = document.querySelector("form")


function calculate(year, month, day) {
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

    return [years, months, days];
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if (document.getElementById("daynum").innerHTML!=="- -"){
        document.getElementById("daynum").innerHTML="- -"
        document.getElementById("yearnum").innerHTML="- -"
        document.getElementById("monthnum").innerHTML="- -"
        return
    }
    let info = ""
    if (form.year.value>cyear || form.month.value>12 || form.day.value>li[form.month.value] || form.year.value<1 || form.month.value<1 || form.day.value<1){
        e.target.reset()
        return alert("Wrong date")
       
    }
    else{
        info = calculate(Number(form.year.value),Number(form.month.value),Number(form.day.value))
    }
    
    document.getElementById("daynum").innerHTML=info[2]
    document.getElementById("yearnum").innerHTML=info[0]
    document.getElementById("monthnum").innerHTML=info[1]
    e.target.reset()
})
