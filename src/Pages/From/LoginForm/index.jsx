import { userData } from '../../../lib/lib';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { HiEyeSlash } from 'react-icons/hi2';
import LoginUser from '../LoginUser';
import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../../Firebase/firebase.init';
import Swal from 'sweetalert2';
import { FacebookAuthProvider } from 'firebase/auth';

const LoginForm = ({
  handleGoogleLogin,
  users,
  setUsers,
  handleSignOut,
  handleGithubLogin,
}) => {
  // console.log(users.photoURL);
  const inputFieldData = userData.signInData();
  const [eye, setEye] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const[emailError,setEmailError]=useState("");
  // const[passwordError,setPasswordError]=useState("");
  const handleOnChange = (e) => {
    if (e.target.name == 'Email') {
      setEmail(e.target.value);
    } else if (e.target.name == 'Password') {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (!user.emailVerified) {
          Swal.fire({
            title: 'plz visit your gmail and verified Email!',
            text: 'You clicked the button!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setUsers(user);
          Swal.fire({
            title: 'SuccesFully Login!',
            text: 'You clicked the button!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
        }
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: 'error',
          title: 'Oops Wrong...',
          text: `${errorMessage}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const handleFacebookLogin = () => {
    console.log('facebook click');
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        Swal.fire({
          title: 'SuccesFully Login!',
          text: 'You clicked the button!',
          icon: 'success',
        });
        setUsers(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: 'error',
          title: 'Oops Wrong...',
          text: `${errorMessage}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
//  firebase reset password 
const handleResetPassword=()=>{
  if(!email){
    Swal.fire({
      icon: 'error',
      title: 'Wrong Email Address...',
      text: `Plz type valid Email Address`,
    });
  }
  else{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    Swal.fire({
      title: 'SuccesFully Sent Email!',
      text: 'You Checked Email and Update Your New Password and try Again Login Valid Password!',
      icon: 'success',
    });
  })
  .catch((error) => {
    const errorMessage = error.message;
        Swal.fire({
          icon: 'error',
          title: 'Oops Wrong...',
          text: `${errorMessage}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
   
  });
    
  }
 
  
}
  return (
    <div className="bg-gray-50 py-[84px] px-[94px] drop-shadow-lg rounded-2xl">
      {!users ? (
        <div>
          <h1 className="text-blue-600 text-6xl pb-10 font-extrabold">
            Login Form
          </h1>
          <div className="inputFieldWrapper relative ">
            <form className="" action="#" onSubmit={(e) => e.preventDefault()}>
              {inputFieldData?.map(({ name, id, isRequred }) => (
                <div key={id} className="flex flex-col gap-y-3">
                  <label htmlFor="">
                    {name}
                    <span className="text-red-500">{isRequred ? '*' : ''}</span>
                  </label>
                  <input
                    className="p-4 drop-shadow-lg border border-black-500 rounded"
                    type={
                      name == 'Email'
                        ? 'email'
                        : name == 'Password' && eye
                        ? 'password'
                        : 'text'
                    }
                    name={name}
                    id={name}
                    placeholder={`Plz type ${name}`}
                    onChange={handleOnChange}
                  />
                  {name == 'Password' && (
                    <div>
                      {password && (
                        <div
                          onClick={() => setEye(!eye)}
                          className="text-2xl cursor-pointer inline-block absolute  bottom-[62%] right-[5%]"
                        >
                          {eye ? <HiEyeSlash /> : <FaEye />}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={handleSubmit}
                className="px-7 py-3 cursor-pointer bg-blue-600 text-white rounded font-bolder text-2xl mt-5"
              >
                Login
              </button>
               <p onClick={handleResetPassword} className='text-red-500 cursor-pointer mt-4 text-center text-xl font-bold'>Change or Reset Your Password ? </p>
            </form>
            <h1 className="text-center font-extrabold text-3xl">OR</h1>
            <div className="authentication flex flex-row gap-x-4 items-center justify-center mt-5">
              <FcGoogle
                onClick={handleGoogleLogin}
                className="text-6xl m-2 drop-shadow-xl cursor-pointer"
              />
              <FaFacebook
                onClick={handleFacebookLogin}
                className="text-blue-500 text-5xl m-2 drop-shadow-lg cursor-pointer"
              />
              <FaGithub
                onClick={handleGithubLogin}
                className="text-5xl m-2 drop-shadow-lg cursor-pointer"
              />
              <FaInstagram className="text-5xl text-pink-600 m-2 drop-shadow-lg cursor-pointer" />
            </div>
          </div>
        </div>
      ) : (
        <LoginUser handleSignOut={handleSignOut} users={users} />
      )}
    </div>
  );
};
LoginForm.propTypes = {
  handleGoogleLogin: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  handleGithubLogin: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  setUsers: PropTypes.object.isRequired,
};
export default LoginForm;
