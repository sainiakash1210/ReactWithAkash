import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData() // we get data in variable from function
    //const [data,setData] = useState([])
    //page or component jaise hi load hoga useEffect run hoga
    // useEffect(() => {
    //    fetch('https://api.github.com/users/hiteshchoudhary')
    //    .then(Response=>Response.json())
    //    .then(data=>{
    //     console.log(data); // kuch bhi log nhi hoga uske liye ek state chahiye hogi esliye useState([]) fuction call krenge 
    //     setData(data) //jisse data set hoga
    //    })
    // }, [])
    
    // in below section by using below fetch promise we get data by using hooks
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt='Git picture' width={300} />
    </div>
  )
}
 // this is just like promise and this used in loader pass reference in loader that fetch api when curser hover that link
// we comment all useEffect method write in upper we use below promise or fuction to fetch API
export const gitHubInfoLoader = async()=>{
    const response =await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}