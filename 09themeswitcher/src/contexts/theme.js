import { createContext,useContext } from "react";

// we put default value in createContext . jab context first time create ho to kya kya value feed ho.  
// now humne object liya hai jisme key-value pair liye gye hai 
export const ThemeContext = createContext({
   themeMode:"light",
   darkTheme: ()=>{},
   lightTheme:()=>{}
}) 

export const ThemeProvider = ThemeContext.Provider // we export a variable

//we make custom hook below it is just like a fuction and we use "use" with hooks and it return "useContext"
export default function useTheme(){
    return useContext(ThemeContext) // we passed created context refrence in useContext() function
}