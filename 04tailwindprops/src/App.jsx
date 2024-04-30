import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5' >Tailwind Test</h1>
      <Card userName = "Yash Khati"/>
      <Card/>
    </>
  )
}

export default App
