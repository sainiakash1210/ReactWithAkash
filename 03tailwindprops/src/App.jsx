import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  //we pass object and also array in props by passing variable in curly braces
  let obj = {
    username:"Akash",
    age:30
  }
  let arr =[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello Tailwind</h1>
      {/* we pass props value by following below */}
      {/* <Card channel="ReactwithAkash" someObj={obj} someArray={arr}/> */}
      <Card userName="ReactwithAkash" btnText="Click me" /> 
      <Card userName="AkashTech" btnText="Play" /> 
 </>
  )
}

export default App
