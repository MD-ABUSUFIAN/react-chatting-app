import React from 'react'
import { IoCloudUploadOutline, IoHomeOutline, IoSettingsOutline} from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";



import { NavLink ,
} from 'react-router';


const Sidebar = () => {
    const profileIcons=[
        {
            id:1,
            icon:<IoHomeOutline />

        },
        {
            id:2,
            icon:<LuMessageCircleMore />


        },
        {
            id:3,
            icon:<IoMdNotificationsOutline />


        },
        {
            id:4,
            icon:<IoHomeOutline />

        },
        {
            id:5,
            icon:<MdLogout />



        },
    ]
  return (
        <div className="sidebar bg-blue-500 w-full h-dvh">
            <div className="profileImgWrapper">
                <div className=' relative flex items-center group justify-center ease-linear duration-500
'>
                <picture>
                    <img className='w-[70px] h-[70px] rounded-full md:mt-10 cursor-pointer' src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="" />
                </picture>
                <div className="icon text-3xl group-hover:block hidden absolute left-1/2 top-1/2 -translate-x-1/2">
                    <span>
                    <IoCloudUploadOutline/>
                    </span>
                </div>
                </div>
                <div className='ProfileLinkWrapper flex flex-col gap-y-10 mt-10'>
                    

                        {
                            profileIcons.map((item,index)=>
                            profileIcons.length-1==index ? (<div className='mt-10'><span className='flex items-center justify-center active text-5xl text-gray-500 hover:text-blue-500' key={item.id}>   {item?.icon}       
                            </span></div>):(<span className='text-5xl flex items-center justify-center text-gray-500 active hover:text-blue-500' key={item.id}>   {item?.icon}       
                            </span>)                           
                            
                            )
                        }
                        
                    
                </div>
            </div>
        </div>
    
  )
}

export default Sidebar