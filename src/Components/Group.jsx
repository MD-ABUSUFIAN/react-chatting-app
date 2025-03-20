
import users from '../fetch/fetch'
import GroupCard from './HomeComponents/GroupCard'

const Group = () => {
 const groupUsers=users;
 
  return (
    <div  className='px-3'>
        <GroupCard groupUsers={groupUsers} heading={" Group"} button={"Today, 8:56pm"} style={""}/>
    </div>
  )
}

export default Group