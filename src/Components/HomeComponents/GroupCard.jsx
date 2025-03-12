import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import Card from './Card';


const GroupCard = ({heading,button,style}) => {
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
        },
    ]
    return (
        <div className='inset-shadow-2xs  p-4 rounded overflow-y-auto h-[300px] w-full'>
            <div className="groupHeading flex justify-between items-center">
                <h1 className='text-2xl font-bold'>{heading}</h1>
                <span className='text-xl font-bold text-blue-600'><HiDotsVertical /></span>
            </div>
            <div className="cardWrapper">
                {
                    groupUsers.map((user,index)=>
                    groupUsers.length-1==index?(<Card button={button} style={style} user={user} key={user?.id} border={"border-b-0"}/>)
                    :(<Card button={button} style={style} user={user} key={user?.id} border={"border-b-2"}/>)
                    )
                }
                <Card/>
            </div>
        </div>
    )
}

export default GroupCard