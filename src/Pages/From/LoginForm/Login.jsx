import {sendPasswordResetEmail,signInWithEmailAndPassword,} from 'firebase/auth';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaEye, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { HiEyeSlash } from 'react-icons/hi2';
import auth from '../../../Firebase/firebase.init.js';
import { userData } from '../../../lib/lib.js';
import sweetAlert from '../../../OtherFunction/Sweet Alert/sweetAlert.js';
import LoginUser from '../LoginUser/index.jsx';

// import { useNavigate } from 'react-router';


const Login = ({
  handleGoogleLogin,
  users,
  setUsers,
  handleSignOut,
  handleGithubLogin,
  handleTwitterLogin,
  handleFacebookLogin
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
          sweetAlert(
            'SEND EMAIL',
            'plz visit your gmail and verified Email!',
            'success'
          );
        } else {
          setUsers(user);
          sweetAlert('SuccesFully Login!', ' wellcome our New USER', 'success');
        }
        // console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetAlert('Oops Wrong...', errorMessage, 'error');
      });
  };

 
  //  firebase reset password
  const handleResetPassword = () => {
    if (!email) {
      sweetAlert(
        'Plz type valid Email Address',
        'Wrong Email Address...',
        'error'
      );
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          sweetAlert(
            'SuccesFully Sent Email!!',
            ' You Checked Email and Update Your New Password and try Again Login Valid Password!',
            'success'
          );
        })
        .catch((error) => {
          const errorMessage = error.message;
          sweetAlert('Oops Wrong...', errorMessage, 'error');
        });
    }
  };
  return (
    <div className="bg-gray-50 rounded-2xl drop-shadow-lg px-[94px] py-[84px]">
      {!users ? (
        <div>
          <h1 className="text-6xl text-blue-600 font-extrabold pb-10">
            Login Form
          </h1>
          <div className="inputFieldWrapper relative">
            <form className="" action="#" onSubmit={(e) => e.preventDefault()}>
              {inputFieldData?.map(({ name, id, isRequred }) => (
                <div key={id} className="flex flex-col gap-y-3">
                  <label htmlFor="">
                    {name}
                    <span className="text-red-500">{isRequred ? '*' : ''}</span>
                  </label>
                  <input
                    className="border border-black-500 p-4 rounded drop-shadow-lg"
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
                          className="text-2xl absolute bottom-[62%] cursor-pointer inline-block right-[5%]"
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
                className="bg-blue-600 rounded text-2xl text-white cursor-pointer font-bolder mt-5 px-7 py-3"
              >
                Login
              </button>
              <p
                onClick={handleResetPassword}
                className="text-center text-red-500 text-xl cursor-pointer font-bold mt-4"
              >
                Change or Reset Your Password ?{' '}
              </p>
            </form>
            <h1 className="text-3xl text-center font-extrabold">OR</h1>
            <div className="flex flex-row justify-center authentication gap-x-4 items-center mt-5">
              <FcGoogle
                onClick={handleGoogleLogin}
                className="m-2 text-6xl cursor-pointer drop-shadow-xl"
              />
              <FaFacebook
                onClick={handleFacebookLogin}
                className="m-2 text-5xl text-blue-500 cursor-pointer drop-shadow-lg"
              />
              <FaGithub
                onClick={handleGithubLogin}
                className="m-2 text-5xl cursor-pointer drop-shadow-lg"
              />
              <FaTwitter
                onClick={handleTwitterLogin}
                className="m-2 text-5xl text-blue-600 cursor-pointer drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      ) : (
        <LoginUser handleSignOut={handleSignOut} users={users} />
      )}
    </div>
  );
};
Login.propTypes = {
  handleGoogleLogin: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  handleGithubLogin: PropTypes.func.isRequired,
  handleTwitterLogin: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  setUsers: PropTypes.object.isRequired,
};
export default Login;
