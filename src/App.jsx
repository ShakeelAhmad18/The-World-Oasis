import { useEffect } from "react"
import { getCobin } from "./services/apiCabin"


function App() {
 
  useEffect(function (){
    getCobin().then((data)=>console.log(data))
  },[])

  return (
    <>
     hello React + vite
    </>
  )
}

export default App
