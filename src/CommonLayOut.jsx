import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Components/HomeComponents/Sidebar'

const CommonLayOut = () => {
  return (
    <div className='flex h-screen'>
    <div className="sideBar w-[10%]">
    <Sidebar/>
    </div>
    <div className="sideContent w-[90%] ">
    <Outlet/>
    </div>
   
      
  </div>
    
  )
}

export default CommonLayOut