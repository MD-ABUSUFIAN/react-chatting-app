import React from 'react'
import GroupCard from './HomeComponents/GroupCard'

const Friends = () => {
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
  <div className='px-3'>
      <GroupCard groupUsers={groupUsers} heading={"Friends"} button={"Accept"} style={""}/>
  </div>
  )
}

export default Friends