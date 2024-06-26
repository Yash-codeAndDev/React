import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
    
  const [password, setPassword] = useState("")

  const passwordRef = useRef()

  const passwordGenerator = useCallback( () => {
    let pass  = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"

    if(charAllowed) str += "!@#%^&-+_=[]{}`"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)

    }
    
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=> {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed, passwordGenerator])

  const copyPasswordToclipboard = useCallback( () => {
      passwordRef.current?.select()
     
      window.navigator.clipboard.writeText(password)
  } ,[password])
  return (
    <>
     <div className="max-w-md p-6 mx-auto mt-10 text-white bg-gray-800 rounded-lg">
      <h2 className="mb-4 text-2xl font-bold text-center">Password Generator</h2>
      <div className="flex mb-4 overflow-hidden rounded-lg">
        <input
          type="text"
          value={password}
          placeholder="Enter password here"
          readOnly
          className="w-full px-4 py-2 text-white bg-gray-700 rounded-md focus:outline-none focus:bg-gray-900"
          ref={passwordRef}
          
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg'
          onClick={copyPasswordToclipboard}
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm text-orange-300 gap-x-2'  >
        <div className='flex items-center gap-x-1 '>
          <input 
            type='range'
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked = {numberAllowed}
            id= "numberInput"
            onChange={ () => 
              setNumberAllowed( prev => !prev)
            }
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked = {charAllowed}
            id= "charInput"
            onChange={ () => 
              setCharAllowed( prev => 
                !prev
              )
            }
          />
          <label htmlFor='numberInput'>Character</label>
        </div>


      </div>
    </div>
    </>
  )
}

export default App
