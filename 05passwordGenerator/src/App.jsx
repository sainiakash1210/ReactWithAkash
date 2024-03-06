import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //ref hook, we make variable for this hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
   let pass =""
   let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed) str+="0123456789"
   if(charAllowed) str+="!@#$%^&*()-_=+[]{}|\;:',./<>?~`"

   for (let i = 1; i < length; i++) {
    let char = Math.floor(Math.random()*str.length +1)
    pass += str.charAt(char)
   }
   setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])//we give  for optimize, momoize, catche me rakhta hai ye loop ko nhi chalata 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //highlited value in textbox while copy the text
    passwordRef.current?.setSelectionRange(0, 999);// it set range to select the text
    window.navigator.clipboard.writeText(password)// this code is used to select the clipboard text to copy the code text
  }, [password])

  //passwordGenerator(); we cannot call   
  //below code, under useEffect hook we call passwordGenerator function
  //it is also called when page load occure or any change hapen in page then it run
  useEffect(() => { passwordGenerator()}, 
  [length, numberAllowed, charAllowed, passwordGenerator]) // yha pe dekhta hai agr kuch bhi change ho to function ko chala do

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-5'>
        <input 
        type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3' 
        placeholder='password' 
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard} //call reference of method
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {setNumberAllowed((prev) => !prev); //toggle true<->false 
          }}
      />
     <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
