import { useState } from 'react'

import './App.css'

function App() 
{
  let [counter, setCounter] = useState(15)


  const addValue = () => {
    
    counter = counter + 1
    setCounter(counter)
    // console.log("Clicked", counter)
  }

  const DecrementValue = () => {
    setCounter(counter-1)
    // console.log("Clicked", counter)
  }
  return (
    <>
      <h1>Learning About Hooks In React</h1>
      <h2>Counter Value : {counter} </h2>

      <button
      onClick={addValue}
      >
        Add Value {counter}
      </button>
      <br/>
      <button
        onClick={DecrementValue}
      >
        Decrement Value {counter}
      </button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
