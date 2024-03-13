import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

// we learn here that "UserContext" ke under value ko kaise fetch krunga 
// hum  "useContext" ke dwara esko fetch kr sakte hai

function Login() {
    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
    const {setUser} = useContext(UserContext) // if we cant to access variable and fuction of  context then we pass in useContext() function
    // setUser-> this property access here from UserContextProvider
    const handleSubmit =(e)=>{
     e.preventDefault() // we use this because when we submit the data by POST method then value url ke through chali jaati hai to usko prevent krne ke liye use krte hai
     setUser({username,password}) // data bhejna to a gya esse 
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/>
        {"    "}
        <input type='text'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login