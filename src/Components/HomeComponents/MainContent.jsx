import React from 'react'
import BlockedUsers from '../BlockedUsers'
import Group from '../Group'
import FriendsRequest from '../FriendsRequest'
import UserList from '../UserList'
import Friends from '../Friends'
import GroupList from '../GroupList'
import { HiDotsVertical } from 'react-icons/hi'
import { CiSearch } from "react-icons/ci";

const MainContent = () => {
  return (
  <div className=''>
    
      <div className="search relative w-[35%] px-4">
      <input className='px-8 py-2 my-1 w-full rounded shadow text-xl' type="text" name="search" placeholder='search '  id="" />
      <span className='text-2xl font-bold text-blue-600 absolute top-[30%] cursor-po right-[5%]'><HiDotsVertical /></span>
      <span className='text-2xl font-bold text-gray-400 cursor-pointer absolute top-[25%] cursor-po left-[5%]'><CiSearch /></span>
      </div>
    
      <div className= 'grid grid-cols-3 items-center max-h-dvh gap-4 justify-between' >
        {/* Group List section start */}
        <div >
        <GroupList/>
        </div>
        {/* Group List section end */}

        {/* friends section start */}
        <div >
        <Friends/>
        </div>
        {/* Friends setion end  */}

        {/* users list section start */}
        <div >
        <UserList/>
        </div>
        {/* users list section end */}

        <div >
          {/* Friends Request section start */}
        <FriendsRequest/>
        </div>
        {/* Friends Request section end*/}

        {/* Group user section start */}
        <div >
      <Group/>
        </div>
        {/* Group section end*/}

        {/* blocked user section start */}
        <div>
          <BlockedUsers/>
        </div>
        {/* blocked user section end */}
    </div>
  </div>
  )
}

export default MainContent