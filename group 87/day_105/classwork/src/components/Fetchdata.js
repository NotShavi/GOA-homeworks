const fetchdata = async (link) =>{
    const data = await fetch(link)
    const data2 = await data.json()
    return data2
}

export default fetchdata