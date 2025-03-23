import {
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    TwitterAuthProvider,
    FacebookAuthProvider,
  } from 'firebase/auth';
  import { useState } from 'react';
  import loginBg from '../../../assets/loginBg.avif'
  import auth from '../../../Firebase/firebase.init';
  import sweetAlert from '../../../OtherFunction/Sweet Alert/sweetAlert';
  import { getDatabase, ref, set,push } from "firebase/database";

import Login from './Login';
import { Link } from 'react-router';
  
  const LoginForm = () => {
    const gitHubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const [users, setUsers] = useState(null);
    const db = getDatabase();

  
    // GoogleAuthentication
  
    // GoogleLogin
    const handleGoogleLogin = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          const datas=ref(db,'users/')
                  // const updateData=push(data)
                  set(push(datas), {
                    userId :user?.uid,
                    username: user?.displayName,
                    email: user?.email||" email messing",
                    profile_picture : user?.photoURL
                  });
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
          const datas=ref(db,'users/')
                  // const updateData=push(data)
                  set(push(datas), {
                    userId :user?.uid,
                    username: user?.displayName,
                    email: user?.email||" email messing",
                    profile_picture : user?.photoURL
                  });
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
          const datas=ref(db,'users/')
                  // const updateData=push(data)
                  set(push(datas), {
                    userId :user?.uid,
                    username: user?.displayName,
                    email: user?.email||" email messing",
                    profile_picture : user?.photoURL
                  });
          sweetAlert('SuccesFully Login!', ' wellcome our New USER', 'success');
          setUsers(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          sweetAlert('Oops Wrong...', errorMessage, 'error');
        });
    };
  //  FaceBOOK lOGIN AUITHETICATION
  const handleFacebookLogin = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        const datas=ref(db,'users/')
                  // const updateData=push(data)
                  set(push(datas), {
                    userId :user?.uid,
                    username: user?.displayName,
                    email: user?.email||" email messing",
                    profile_picture : user?.photoURL
                  });
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
        <div className="flex formWrapper justify-betwen items-center">
          <div className="flex flex-col formLeftWrapper justify-center w-1/2 hv-screen items-center">
            <div className="p-6 rounded drop-shadow-lg">
             
                <Login
                  handleGoogleLogin={handleGoogleLogin}
                  users={users}
                  setUsers={setUsers}
                  handleSignOut={handleSignOut}
                  handleGithubLogin={handleGithubLogin}
                  handleTwitterLogin={handleTwitterLogin}
                  handleFacebookLogin={handleFacebookLogin}
                />
              
            </div>
  
            <span className="text-lg font-medium mb-5">
            Don;t have Account? plz <Link to="/register" className="text-blue-500 text-xl cursor-pointer font-bolder">Register</Link>
           
          </span>
          </div>
  
          <div className="formRightWrapper w-1/2 ">
           
              <img className="w-full h-dvh" src={loginBg} alt="" />
           
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginForm;
  