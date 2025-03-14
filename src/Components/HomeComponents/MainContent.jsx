import React from 'react'
import BlockedUsers from '../BlockedUsers'
import Group from '../Group'
import FriendsRequest from '../FriendsRequest'
import UserList from '../UserList'
import Friends from '../Friends'
import GroupList from '../GroupList'

const MainContent = () => {
  return (
  <div className=''>
    
      <div className="search relative w-[30%]">
      <input className='px-8 py-2 my-1 w-full rounded border text-2xl' type="text" name="search" placeholder='plz search '  id="" />
      <button className='bg-blue-600 text-white text-xl px-2 py-[11px]  absolute top-[7%] right-[-3%] cursor-pointer rounded-br-xl rounded-tr-xl hover:bg-blue-400 hover:text-amber-600'>Search</button>
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