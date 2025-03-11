import React from 'react'
import { IoCloudUploadOutline, IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { NavLink } from 'react-router';


const Sidebar = () => {
    const profileIcons=[
        {
            id:1,
            icon:<IoHomeOutline />

        },
        {
            id:2,
            icon:<IoHomeOutline />

        },
        {
            id:3,
            icon:<IoHomeOutline />

        },
        {
            id:4,
            icon:<IoHomeOutline />

        },
        {
            id:5,
            icon:<IoSettingsOutline />


        },
    ]
  return (
        <div className="sidebar bg-amber-500 w-full h-dvh">
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
                            profileIcons.length-1==index ? (<div className='mt-10'><span className='flex items-center justify-center active text-5xl text-white' key={item.id}>   {item?.icon}       
                            </span></div>):(<span className='text-5xl flex items-center justify-center text-white active' key={item.id}>   {item?.icon}       
                            </span>)                           
                            
                            )
                        }
                        
                    
                </div>
            </div>
        </div>
    
  )
}

export default Sidebar