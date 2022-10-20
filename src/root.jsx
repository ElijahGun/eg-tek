import React from 'react'
import Navbar from './components/navbar/navbar.component'
import {Outlet} from 'react-router-dom';
import {Footer} from './components/footer/footer'

export const Root = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
