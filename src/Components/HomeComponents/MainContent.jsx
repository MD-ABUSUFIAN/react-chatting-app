import React from 'react'
import GroupCard from './GroupCard'

const MainContent = () => {
  return (
  <div className=''>
    
      <div className="search relative w-[30%]">
      <input className='px-8 py-2 my-1 w-full rounded border text-2xl' type="text" name="search" placeholder='plz search '  id="" />
      <button className='bg-blue-600 text-white text-xl px-2 py-[11px]  absolute top-[7%] right-[-3%] cursor-pointer rounded-br-xl rounded-tr-xl hover:bg-blue-400 hover:text-amber-600'>Search</button>
      </div>
    
      <div className= 'grid grid-cols-3 items-center max-h-dvh gap-4 justify-between' >
        {/* top left group content  */}
        <div >
        <GroupCard heading={"Group List"} button={"Join"} style={"bg-blue-500 text-white font bold px-7 py-2 rounded"}/>
        </div>
        {/* top right group content  */}

        <div >
        <GroupCard heading={"Friends"} button={"Accept"} style={""}/>
        </div>
        {/* bottom left group content  */}

        <div >
        <GroupCard heading={"User List"} button={"+"} style={"bg-blue-500 text-white font bold px-4 py-2 rounded"}/>
        </div>
        {/* bottom right group content  */}

        <div >
        <GroupCard heading={"Friend  Request"} button={"Accept"} style={"bg-red-500 text-white font bold px-7 py-2 rounded"}/>
        </div>
        <div >
        <GroupCard heading={" Group"} button={"Today, 8:56pm"} style={""}/>
        </div>
        <div >
        <GroupCard heading={"Blocked Users"} button={"Unblock"} style={"bg-blue-500 text-white font bold px-7 py-2 rounded"}/>
        </div>
    </div>
  </div>
  )
}

export default MainContent