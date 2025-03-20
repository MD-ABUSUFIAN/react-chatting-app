 
import GroupCard from './HomeComponents/GroupCard'
import users from '../fetch/fetch';

const FriendsRequest = () => {
  const groupUsers=users;

  return (
    <div className='px-3'>

    <GroupCard groupUsers={groupUsers} heading={"Friend  Request"} button={"Accept"} style={"bg-red-500 text-white font bold px-7 py-2 rounded"}/>
    </div>
  )
}

export default FriendsRequest