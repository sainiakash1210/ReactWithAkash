// we make provider of UserContext
import React from "react";
import UserContext from "./UserContext";

//children ek generic name hai jo bhi i.e like variable/fuction reference aaye usko as it is aange pass kr do
const UserContextProvider = ({children})=>{
    const [user,setUser] = React.useState(null)// for practically hum yha pe API call kr sakte hai
   return(
    //value ke under object {} pass kr diya hai jo bhi hum chahe wo pass kr sakte hai
     <UserContext.Provider value={{user, setUser}}>
     {children}
     </UserContext.Provider>
   )
} 

export default UserContextProvider