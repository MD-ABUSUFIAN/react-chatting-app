import LoginForm from './LoginForm';
import loginBg from '../../assets/loginBg.avif';
import registrationBg from '../../assets/sign-up-concept-illustration_114360-7965.avif';
import welcomeBg from '../../assets/welcome-images.png'     
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut,  } from "firebase/auth";
import auth from '../../Firebase/firebase.init';





const Form = () => {
  const gitHubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const [users,setUsers]=useState(null)
  const [condition, setCondition] = useState(false);



  // GoogleAuthentication 

  // GoogleLogin 
  const handleGoogleLogin=()=>{
  
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const user=result.user
        setUsers(user)
    }).catch((error) => {
        setUsers(null)
        console.log(error);
    });
}



const handleGithubLogin=()=>{
  signInWithPopup(auth, gitHubProvider)
    .then((result) => {
        const user=result.user
        setUsers(user)
    }).catch((error) => {
        setUsers(null)
        console.log(error);
    });
}
// Google LogOut 
const handleSignOut=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("SIGNOUT DONE");
    setUsers(null)
    
  }).catch((error) => {
  console.log("error",error);
  
    // An error happened.
  });
}


  return (
    <div>
      <div className="formWrapper flex items-center justify-betwen">
        <div className=' formLeftWrapper flex flex-col items-center justify-center w-1/2 h-screen'>
         
        <div className=' p-16 rounded drop-shadow-lg'>
            
           {condition ? <LoginForm 
           handleGoogleLogin={handleGoogleLogin}
           users={users}
           handleSignOut={handleSignOut}
           handleGithubLogin={handleGithubLogin}
           /> : <RegistrationForm />}
        </div>
         
            <div className='mt-5'>

                 {/* <span className='text-xl'>Already Register? {
                    !condition  ?<button
                    className=" text-blue-500 text-xl font-bolder cursor-pointer"
                    onClick={() => setCondition(true)}
                  >Login</button>:
                    <button
                  className=" text-blue-500 text-xl font-bolder cursor-pointer "
                  onClick={() => setCondition(false)}
                >
                  Register
                </button> }
                </span> 
                */}
                 
                { <span className='text-xl'>Already Register? {
                    !condition && !users ?<button
                    className=" text-blue-500 text-xl font-bolder cursor-pointer"
                    onClick={() => setCondition(true)}
                  >Login</button>:condition && !users ?<>
                    <button
                  className=" text-blue-500 text-xl font-bolder cursor-pointer "
                  onClick={() => setCondition(false)}
                >
                  Register
                </button> 
                or New User
                  </> :users && ""}
                 </span> }
              
              
              
            </div>
        
        </div>
        {/* <div className="formRightWrapper w-1/2 h-screen ">
          {condition ?<img className="w-full h-screen" src={loginBg} alt="" /> : <img className="w-full h-screen" src={registrationBg} alt="" />}
          
        </div> */}
        <div className="formRightWrapper w-1/2 h-screen ">
          {condition && !users ?(
            <img className="w-full h-screen" src={loginBg} alt="" />
          ) :!condition && !users ? (
            <img className="w-full h-screen" src={registrationBg} alt="" />
          ):users &&(
            <img className="w-full h-screen" src={welcomeBg} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
