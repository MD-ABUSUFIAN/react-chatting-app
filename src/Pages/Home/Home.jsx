import React from 'react'
import MainContent from '../../Components/HomeComponents/MainContent'
import Sidebar from '../../Components/HomeComponents/Sidebar'

const Home = () => {
  return (
    <div className='flex'>
      <div className="sideBar w-[10%]">
      <Sidebar/>
      </div>
      <div className="sideContent w-[90%] ">
        <MainContent/>
      </div>
        
    </div>
  )
}

export default Home