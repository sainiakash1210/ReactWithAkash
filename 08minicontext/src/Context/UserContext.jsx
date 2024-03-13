// In context file we write pure java script code
import React from "react";

const UserContext = React.createContext() // initially value koi feed nhi hai eska second type 09 me hai theme.js me jisme initially object liya gya hai

export default UserContext;

//part -1)- first we create context by upper code 
//every context called a "provider" because it provide bunch of variable
// we make context to provider by following code
//context ek baar ban gya to uske sath ek provider bhi banana padta hai jo ki variable provide krega
// we use provider by following way
//companent directly UserContext ke through all state ka access le sakte hai
///* we pass component under UserContext  to give access createContext function  */}

{/* <UserContext>
    
<Login/>
<card>
    <Data/>
</card>

</UserContext> */}