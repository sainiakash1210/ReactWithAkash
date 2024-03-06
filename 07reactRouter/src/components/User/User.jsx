import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams() // by this we pass parameter data from browser or URL to page level
  return (
    <div className='bg-green-600 text-white text-3xl p-4'>User:{userId}</div>
  )
}

export default User