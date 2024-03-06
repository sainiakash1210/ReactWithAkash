import Chai from "./chai"

function App() {
  const username = "Akash Tech"
  return (
      // <Chai/>
      //we export one closing  element as fllowing  <> tag is called "fragment"
      //{username} this is evaluated excression or final result after evaluate we cannot evluate like in curly braces EX - {if(true) username)}
      <>
      <Chai/>
      <h1>Bn gyi kya chai {username}</h1>
      <h2>ha ban gyi pe lo akar</h2>
      </>

  )
}

export default App
