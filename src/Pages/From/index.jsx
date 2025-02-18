import LoginForm from './LoginForm';
import loginBg from '../../assets/loginBg.avif';
import registrationBg from '../../assets/sign-up-concept-illustration_114360-7965.avif';
import welcomeBg from '../../assets/welcome-images.png'     
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut,  } from "firebase/auth";
import auth from '../../Firebase/firebase.init';
import Swal from 'sweetalert2';





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
    const errorMessage = error.message;
    Swal.fire({
          icon: "error",
          title: "Oops Wrong...",
          text: `${errorMessage}`,
          footer: '<a href="#">Why do I have this issue?</a>'
        });

  });
}


  return (
    <div>
      <div className="formWrapper flex items-center justify-betwen">
        <div className=' formLeftWrapper flex flex-col items-center justify-center w-1/2 hv-screen'>
         
        <div className=' p-6 rounded drop-shadow-lg'>
            
           {condition ? <LoginForm 
           handleGoogleLogin={handleGoogleLogin}
           users={users}
           setUsers={setUsers}
           handleSignOut={handleSignOut}
           handleGithubLogin={handleGithubLogin}
           /> : <RegistrationForm 
           setUsers={setUsers} 
           handleSignOut={handleSignOut}
           users={users}
           />}
        </div> 
            
                 <span className='text-lg font-medium  mb-5'>Already Register? {
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
               
            
        </div>
       
        <div className="formRightWrapper w-1/2 vh-screen ">
          {condition && !users ?(
            <img className="w-full vh-screen" src={loginBg} alt="" />
          ) :!condition && !users ? (
            <img className="w-full vh-screen" src={registrationBg} alt="" />
          ):users &&(
            <img className="w-full vh-screen" src={welcomeBg} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
