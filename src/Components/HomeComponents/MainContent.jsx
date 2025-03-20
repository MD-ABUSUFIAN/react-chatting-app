
import BlockedUsers from '../BlockedUsers'
import Group from '../Group'
import FriendsRequest from '../FriendsRequest'
import UserList from '../UserList'
import Friends from '../Friends'
import GroupList from '../GroupList'
import Search from '../Search'

const MainContent = () => {
  return (
  <div className=''>
    
      <div className="search relative w-[35%] px-4">
        <Search/>
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