
import GroupCard from './HomeComponents/GroupCard'
import users from '../fetch/fetch'

const Friends = () => {
    const groupUsers=users;
  return (
  <div className='px-3'>
      <GroupCard groupUsers={groupUsers} heading={"Friends"} button={"Accept"} style={""}/>
  </div>
  )
}

export default Friends