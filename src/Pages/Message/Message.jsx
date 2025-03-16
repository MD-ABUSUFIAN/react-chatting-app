import React from 'react'
import Group from '../../Components/Group'
import Friends from '../../Components/Friends'
import { HiDotsVertical } from 'react-icons/hi'
import { CiSearch } from 'react-icons/ci'
import SingleSms from '../../Components/SingleSms'

const Message = () => {
  return (
    <div className='flex justify-between items-center'>
      
     <div className='messageLeft h-screen w-[40%] mx-auto '>
     <div className=" h-full  flex flex-col  ">
      <div className="search relative w-[92%] mx-auto ">
      <input className='px-8 py-2 shadow w-full rounded-2xl  text-xl' type="text" name="search" placeholder='search '  id="" />
      <span className='text-2xl font-bold text-blue-600 absolute top-[30%] cursor-po right-[5%]'><HiDotsVertical /></span>
      <span className='text-2xl font-bold text-gray-400 cursor-pointer absolute top-[25%] cursor-po left-[2%]'><CiSearch /></span>
      </div>
        <div className='w-full  py-4 rounded-2xl '>
          <Group/>
        </div>
        <div className='w-full  rounded-2xl'>
          <Friends/>
        </div>

      </div>
     </div>
      <div className="messageRight mx-auto w-[60%] h-screen  p-2  ">
            <div className='h-full shadow-xl rounded-2xl bg-white'>
            <SingleSms/>  
            </div>  
        </div>
    </div>
  )
}

export default Message