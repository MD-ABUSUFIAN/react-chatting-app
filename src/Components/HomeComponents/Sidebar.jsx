import  { useEffect, useState } from 'react'
import { IoCloudUploadOutline, IoHomeOutline} from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLogout, MdSettingsSuggest } from "react-icons/md";
import { getDatabase, ref, onValue } from "firebase/database";

import {
    NavLink,
} from 'react-router';


const Sidebar = () => {
    const db = getDatabase();
    const [userList,setUserList]=useState([]);
    const [profilePhoto,setProfilePhoto]=useState("")
    const profileIcons = [
        {
            id: 1,
            path: '/',
            icon: <IoHomeOutline />
        },
        {
            id: 2,
            path: '/message',
            icon: <LuMessageCircleMore />
        },
        {
            id: 3,
            path: '/notification',
            icon: <IoMdNotificationsOutline />
        },
        {
            id: 4,
            path: '/settings',
            icon: <MdSettingsSuggest />
        },
        {
            id: 5,
            icon: <MdLogout />
        }
    ]
    
    useEffect(()=>{
        const scripts=document.createElement("script")
        scripts.src="https://upload-widget.cloudinary.com/latest/global/all.js";
        scripts.async=true;
        document.body.appendChild(scripts)
    },[])
    /**
     * fetch the data to nthe firebase realtime database
     */
    useEffect(()=>{
        const fetchData=()=>{
            console.log("data fetch done")
            
            const usersRef = ref(db, 'users/' );
            onValue(usersRef, (snapshot) => {
                const userArray=[]
                snapshot.forEach((item)=>{
                    userArray.push({...item.val(),userKey:item.key})
                    // console.log(...item.val(),userKey:item.key);
                })
            
                setUserList(userArray);
            
            });
        }
        fetchData()
    },[])
 
    const uploadPhoto=()=>{
       if(window.cloudinary){
        cloudinary?.openUploadWidget({
            cloudName: "ddy6ugeaj", uploadPreset: "profileUpdatePhoto",
            googleApiKey: 'AIzaSyCaO6guzjVU7apaiGNfv4jE3j35mNtLgbk' ,
            searchByRights: true ,
            searchBySites: ["all", "cloudinary.com"],
            sources: [ 'local', 'url', 'unsplash','camera','dropbox','image_search','shutterstock','gettyimages','istock','google_drive']}, 
            (error, result) => {
                if(error){
                    throw new Error("Cloudinary uplooad filed")
                }
                if(result?.info?.secure_url){
                    setProfilePhoto(result?.info?.secure_url);
                }
             });
       }
       else{
        console.log("so sorry cloudinary photo upload field");
       }
    }
    // const uploadPhoto = () => {
    //     if(window.cloudinary){
    //         cloudinary.openUploadWidget({
    //             cloudName: "ddy6ugeaj", uploadPreset: "uploadProfile",
    //             searchBySites: ["all", "cloudinary.com"],
    //             searchByRights: true,
    //             sources: ['local', 'url', 'image_search', 'camera', 'dropbox	', 'shutterstock	', 'gettyimages', 'istock', 'unsplash', 'google_drive'],
    //             googleApiKey: 'AIzaSyCEtrvYRn-a6Kk9lLmFVW9ak4rULMWSC6g'
    //         }, (error, result) => {
    //             if (error) {
    //                 throw new Error("photo upload failed")
    //             }
    //             else[
    //                 console.log(result?.info?.secure_url
    //                     )
    //             ]
    //         })
    //     }
    //     else{
    //         throw new Error("photo not upload")
    //     }
        
    // }
    return (
        <div className="sidebar bg-blue-500 w-full h-dvh">
            <div className="profileImgWrapper">
                <div className=' relative flex items-center group justify-center ease-linear duration-500
'>
                    <picture>
                        <img className='w-[70px] h-[70px] rounded-full md:mt-10 cursor-pointer' src={profilePhoto || "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"} alt="" />
                    </picture>
                    <div className="icon text-3xl group-hover:block hidden absolute left-[50%] top-[50%] translate-x-[-50%]">
                        <span className='text-red-500 font-bold text-5xl cursor-pointer' onClick={uploadPhoto}>
                            <IoCloudUploadOutline />
                        </span>
                    </div>
                </div>
                <div className='ProfileLinkWrapper flex flex-col gap-y-10 mt-10'>


                    {
                        profileIcons.map((item, index) =>
                            profileIcons.length - 1 == index ? (<div key={item.id} className='mt-10'><span className='flex items-center justify-center  text-5xl text-gray-500 ' >   {item?.icon}
                            </span></div>) : (<NavLink key={item?.id} to={item?.path}><span className='text-5xl flex items-center justify-center text-gray-500 ' >   {item?.icon}
                            </span></NavLink>)

                        )
                    }


                </div>
            </div>
        </div>

    )
}

export default Sidebar