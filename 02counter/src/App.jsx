import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[count,setCount] = useState(15)  //jitne bhi update bhejne hai UI or variable me unko batches me send krta hai
  // fiber or diffing algorith are used to make batches
  // setCount is a method to cotrol the count variable note: we can change name setcount method by own way.
  //let count = 15;
  const Addvalue =()=>{
    //console.log("value added",Math.random());
    console.log("value added",count);
    //count = count+1;
    //setCount(count+1)
    // setCount(count+1)  // if we duplicate the function but it will run only single times due to make batches it will check the function 
    // setCount(count+1) // it different or same function while making batch

    //setCount takes as call back function if want to repeate same menthod and increase value then we write as below
    setCount(prevCounter => prevCounter+1)
    setCount(prevCounter => prevCounter+1)
    setCount(prevCounter => prevCounter+1)
    setCount(prevCounter => prevCounter+1)
  }
  const removeValue =()=>{
    setCount(count-1)
  }
  return (
    <>
      <h1>React with Akash</h1>
      <h2>Counter Value: {count}</h2>
      <button
       onClick={Addvalue}>
        Add value{count}</button>
      <br/>
      <button onClick={removeValue}>
        Remove value{count}</button>
    </>
  )
}

export default App
