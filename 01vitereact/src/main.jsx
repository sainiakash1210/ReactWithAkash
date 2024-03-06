import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyAPP(){
   return(
    <div>
      <h1>Custom  App ! Akash</h1>
    </div>
   )
}

// const reactElement ={
//   type:'a',
//   props:{
//       href:"https://www.google.co.in/",
//       target:"_blank"
//   },
//   children:"click me to visit the google"
// }

const anotherEelement=(
  <a href='https://www.google.co.in/' target='_blank'>Visit Google site</a>
)

const anotherUser ="Akash saini blog"

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.co.in/',target:'_blank'},
  'click me to jump over the google',
  anotherUser // this is called at last after tree prepare then after variable injection called
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    //<App />
  // </React.StrictMode>
  //MyAPP() // we write like 
  //anotherEelement  // this covert into object
  reactElement
)
