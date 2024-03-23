import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incValue(){
    // // count = count+1
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    setCount( (prevCount) => prevCount + 1)
    setCount( (prevCount) => prevCount + 1)
    setCount( (prevCount) => prevCount + 1)
    setCount( (prevCount) => prevCount + 1)
  }
  
  function decValue(){
    setCount(count-1)
  }
  return (
    <>
      <h1>UseState counter</h1>
      <button 
      onClick={incValue}>Increase Value</button>
      <br/>
      <button
      onClick={decValue}>DecreaseValue</button>
      <p>Counter value : {count}</p>
    </>
  )
}

export default App
