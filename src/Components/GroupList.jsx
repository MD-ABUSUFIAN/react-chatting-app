
import users from '../fetch/fetch'
import GroupCard from './HomeComponents/GroupCard'

const GroupList = () => {
    const groupUsers=users;
  return (
    <div className='px-3'>
    <GroupCard groupUsers={groupUsers} heading={"Group List"} button={"Join"} style={"bg-blue-500 text-white font bold px-7 py-2 rounded"}/>
    </div>
  )
}

export default GroupList