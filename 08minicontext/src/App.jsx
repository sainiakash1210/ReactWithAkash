import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <UserContextProvider>
      <h1>React with Akash| Context API</h1>    
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
