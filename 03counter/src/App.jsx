import { useState } from "react"

function App() {
  let [count , setCounter] = useState(0)
  
  const addValue = () =>{
    count = count + 1
    setCounter(count)
  }
  
  const decreaseValue = () =>{
    count = count -1 
    setCounter(count)
  }
  return (
    <>
      <h1>Me and React</h1>
      <h2>Counter Value :{count} </h2>
      <button 
        onClick={addValue}>
        Add Value
      </button>
      <br/>
      <button 
        onClick={decreaseValue}>
        Decrease Value
      </button>
    </>
  )
}

export default App
