import React from 'react'
import GroupCard from './HomeComponents/GroupCard'

const BlockedUsers = () => {
  const groupUsers=[
    {
        id:1,
        img:"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
        name:"Friends Reunion",
        message:"Hi Guys, Wassup!"
    },
    {
        id:2,
        img:"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
        name:"Friends Reunion",
        message:"Hi Guys, Wassup!"
    },
    {
        id:3,
        img:"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
        name:"Friends Reunion",
        message:"Hi Guys, Wassup!"
    },
    {
        id:4,
        img:"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
        name:"Friends Reunion",
        message:"Hi Guys, Wassup!"
    },
    {
        id:5,
        img:"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
        name:"Friends Reunion",
        message:"Hi Guys, Wassup!"
    },
    {
        id:6,
        img:"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
        name:"Friends Reunion",
        message:"Hi Guys, Wassup!"
    }
]
  return (
<div >
        <GroupCard groupUsers={groupUsers} heading={"Blocked Users"} button={"Unblock"} style={"bg-blue-500 text-white font bold px-7 py-2 rounded"}/>
        </div>
  )
}

export default BlockedUsers