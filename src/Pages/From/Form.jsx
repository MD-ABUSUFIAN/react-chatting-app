import LoginForm from './LoginForm';
import loginBg from '../../assets/loginBg.avif';
import registrationBg from '../../assets/sign-up-concept-illustration_114360-7965.avif';
import welcomeBg from '../../assets/welcome-images.png';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import auth from '../../Firebase/firebase.init';
import sweetAlert from '../../OtherFunction/Sweet Alert/sweetAlert';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from 'firebase/auth';

const Form = () => {
  const gitHubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const [users, setUsers] = useState(null);
  const [condition, setCondition] = useState(false);

  // GoogleAuthentication

  // GoogleLogin
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        sweetAlert('SuccesFully Login!', ' Wellcome our New USER', 'success');
        setUsers(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetAlert('Oops Wrong...', errorMessage, 'error');
        setUsers(null);
      });
  };
  //  GitHub Authentication
  const handleGithubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        sweetAlert('SuccesFully Login!', ' Wellcome our New USER', 'success');
        setUsers(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetAlert('Oops Wrong...', errorMessage, 'error');
        setUsers(null);
      });
  };
  // Google LogOut Authentication
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        sweetAlert(
          'LogOut Succesful!',
          ' Try Login Email and Password',
          'success'
        );
        setUsers(null);
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetAlert('Oops Wrong...', errorMessage, 'error');
      });
  };

  // Twitter Authentication check
  const handleTwitterLogin = () => {
    const twitterPovider = new TwitterAuthProvider();
    signInWithPopup(auth, twitterPovider)
      .then((result) => {
        const user = result.user;
        sweetAlert('SuccesFully Login!', ' wellcome our New USER', 'success');
        setUsers(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetAlert('Oops Wrong...', errorMessage, 'error');
      });
  };

  return (
    <div>
      <div className="formWrapper flex items-center justify-betwen">
        <div className=" formLeftWrapper flex flex-col items-center justify-center w-1/2 hv-screen">
          <div className=" p-6 rounded drop-shadow-lg">
            {condition ? (
              <LoginForm
                handleGoogleLogin={handleGoogleLogin}
                users={users}
                setUsers={setUsers}
                handleSignOut={handleSignOut}
                handleGithubLogin={handleGithubLogin}
                handleTwitterLogin={handleTwitterLogin}
              />
            ) : (
              <RegistrationForm
                setUsers={setUsers}
                handleSignOut={handleSignOut}
                users={users}
              />
            )}
          </div>

          <span className="text-lg font-medium  mb-5">
            Already Register?{' '}
            {!condition ? (
              <button
                className=" text-blue-500 text-xl font-bolder cursor-pointer"
                onClick={() => setCondition(true)}
              >
                Login
              </button>
            ) : (
              <button
                className=" text-blue-500 text-xl font-bolder cursor-pointer "
                onClick={() => setCondition(false)}
              >
                Register
              </button>
            )}
          </span>
        </div>

        <div className="formRightWrapper w-1/2 vh-screen ">
          {condition && !users ? (
            <img className="w-full vh-screen" src={loginBg} alt="" />
          ) : !condition && !users ? (
            <img className="w-full vh-screen" src={registrationBg} alt="" />
          ) : (
            users && <img className="w-full vh-screen" src={welcomeBg} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
