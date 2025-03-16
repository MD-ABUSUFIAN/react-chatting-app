import React from 'react'
import { HiDotsVertical} from 'react-icons/hi'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import {  BsFillSendFill } from "react-icons/bs";
import { FaCamera } from "react-icons/fa6";

import { PiDotOutlineFill } from "react-icons/pi";

const SingleSms = () => {
    const sentMessage=()=>{
        console.log("message sent ok");
    }
    return (
        <div className='relative h-[100%] '>
            <div className="smsTop flex justify-between items-center mx-8 p-5 border-b-1 border-b-gray-300 ">
                <div className="user flex items-center justify-between ">
                    <picture>
                        <img className='h-[60px] w-[60px] rounded-full'
                            src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </picture>
                    <div className="username ml-5">
                        <h1 className='text-xl font bold'>Swathi </h1>
                        <span className='text-gray-400'>Online</span>
                    </div>
                    <span className='text-6xl font-bold text-green-400  absolute top-[7%] left-[9%]'>
                        <PiDotOutlineFill />
                    </span>

                </div>
                <span className='text-2xl font-bold text-blue-600 '><HiDotsVertical /></span>
            </div>
            <div className="smsMiddle h-[86%] w-full rounded-2xl">

            </div>
            <div className="smsBottom  absolute bottom-[3%] w-full">
                <div className="search w-[75%] mx-auto  bg-gray-200 rounded-4xl">
                    <input className='px-8 py-3 shadow w-full outline-0 rounded-2xl ' type="text" name="search" placeholder='search ' id="" />
                <div className="icon flex absolute items-center justify-between gap-2 bottom-[25%] right-[15%]">
                <span className='text-2xl cursor-pointer'>
                    <MdOutlineEmojiEmotions />
                    </span>
                    <span className='text-xl cursor-pointer'>
                    <FaCamera />
                    </span>
                </div>
               
                    <span className='w-[45px] h-[45px] bg-blue-500 absolute right-[6%] bottom-[7%] flex items-center justify-center rounded-xl text-white cursor-pointer' onClick={sentMessage}>
                    <BsFillSendFill />
                    </span>
               
                    
                </div>
            </div>
        </div>
    )
}

export default SingleSms