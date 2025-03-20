import React from 'react'
import GroupCard from './HomeComponents/GroupCard'
import users from '../fetch/fetch'

const BlockedUsers = () => {
  const groupUsers=users;
  return (
    <div className='px-3'>
        <GroupCard groupUsers={groupUsers} heading={"Blocked Users"} button={"Unblock"} style={"bg-blue-500 text-white font bold px-7 py-2 rounded"}/>
        </div>
  )
}

export default BlockedUsers