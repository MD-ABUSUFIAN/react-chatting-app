

import { userData } from "../../../lib/lib";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState } from "react";



const LoginForm = ({handleGoogleLogin,users,handleSignOut,handleGithubLogin}) => {
    // console.log(users.photoURL);
    const inputFieldData=userData.signInData();
    const[eye,setEye]=useState(true)
    // const[email,setEmail]=useState("");
    // const[password,setPassword]=useState("");

    // const[emailError,setEmailError]=useState("");
    // const[passwordError,setPasswordError]=useState("");
    const handleOnChange=()=>{
        }
    const handleSubmit=()=>{
    
    }




    return (
        <div className="bg-gray-50 py-[84px] px-[94px] rounded-2xl">
          {
            !users?
            <div>
                     <h1 className="text-blue-600 text-6xl pb-10 font-extrabold">Login Form</h1>
                    <div className="inputFieldWrapper relative ">
                        <form className="" action="#" onSubmit={(e)=>e.preventDefault()}>
                            {
                            inputFieldData?.map(({name,id,isRequred})=>
                                <div key={id} className="flex flex-col gap-y-3">
                                    <label htmlFor="">{name}<span className="text-red-500">{isRequred?"*":""}</span></label>
                                    <input className="p-4 drop-shadow-lg border border-black-500 rounded" 
                                    type={
                                        name=="UserName" ? "text":
                                        name=="Password"&& eye?"password":"text"
                                    } name={name} id={name} placeholder={`plz type ${name}`}
                                    onChange={handleOnChange}
                                    />   
                                    {
                                        name=="Password" && <FaEye onClick={()=>setEye(!eye)} className="text-2xl cursor-pointer inline-block absolute  bottom-[57%] right-[5%]" />
                                    }
                                </div>
                            ) 
                            }
                            
                                
                           
                                <button onClick={handleSubmit} className="px-7 py-3 cursor-pointer bg-yellow-500 text-white rounded font-bolder text-2xl mt-5">Login</button>                          
                        </form>
                        <h1 className="text-center font-extrabold text-3xl">OR</h1>
                        <div className="authentication flex flex-row gap-x-4 items-center justify-center mt-5">
                        <FcGoogle onClick={handleGoogleLogin} className="text-6xl m-2 drop-shadow-xl cursor-pointer" />
                        <FaFacebook className="text-blue-500 text-5xl m-2 drop-shadow-lg cursor-pointer" />
                        <FaGithub onClick={handleGithubLogin} className="text-5xl m-2 drop-shadow-lg cursor-pointer" />
                        <FaInstagram className="text-5xl text-pink-600 m-2 drop-shadow-lg cursor-pointer" />
                        </div>
                    </div>
            </div> :
            <div className="flex flex-col items-center">
                  <div className="flex flex-col gap-y-4 p-5 ">
                      <img className="h-[150px] w-[150px] mx-auto rounded-full" src={users?.photoURL} alt="" />
                      <h1 className="text-3xl  font-bold">{users?.displayName}</h1>
                      <p className="font-bold text-blue-600">{users?.email}</p>
                  </div>
                   <button onClick={handleSignOut} className="px-7 py-3 cursor-pointer bg-yellow-500 text-white rounded font-bolder text-2xl mt-5">LogOut</button>
            </div>
          }
        </div>
    );
};
LoginForm.propTypes={
    handleGoogleLogin:PropTypes.func.isRequired,
    handleSignOut:PropTypes.func.isRequired,
    handleGithubLogin:PropTypes.func.isRequired,
    users:PropTypes.object.isRequired
}
export default LoginForm;





