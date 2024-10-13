import React from 'react'
import Navbar from '../Navbar/Navbar'
import TopBar from '../TopBar/TopBar'
import Slider from '../Slider/Slider'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      
    
      <TopBar/>
      <Navbar/>
     
      <Outlet></Outlet>
    </>
  )
}
