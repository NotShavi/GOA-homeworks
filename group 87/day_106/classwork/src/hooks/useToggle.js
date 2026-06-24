import { useState } from "react"


function useToggle(initialvalue){
    const [dark,setDark] = useState(initialvalue)

    function handleDark(){
        setDark(!dark)
    }

    return [dark,handleDark]
}

export default useToggle