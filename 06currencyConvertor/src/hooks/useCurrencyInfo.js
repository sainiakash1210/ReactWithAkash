//This is custom  hooks majority return JS so extention is in JS
import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const[data,setData] = useState({})  // pas {} empty space if API failed or not return any value by Fetch()
    //useEffect(()=>{},[]) -> useEffect function take two parameter one is call back fuction and second one is dependency array 
    // [] agar array me likhe hue me kuch change ayega to API agin call hogi and also called dependency array
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) //Mostly API se value string formate me aati hai
        .then((res)=>res.json) // string ko JSON me convert krenge
        .then((res) => setData(res[currency])) // then ke under humesa call back aata hai
        console.log(data);
    },[currency])
    console.log(data)
    return data
}
export default useCurrencyInfo;