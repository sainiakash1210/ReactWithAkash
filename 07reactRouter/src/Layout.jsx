import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' // ye layout ko as base use kr lega and header and footer same rakega

function Layout() {
  return (
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
  )
}

export default Layout