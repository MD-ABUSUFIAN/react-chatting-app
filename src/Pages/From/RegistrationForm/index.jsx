import { useState } from 'react';
import { inputData } from '../../../lib/lib';
import { FaEye } from 'react-icons/fa';
import { HiEyeSlash } from 'react-icons/hi2';
import auth from '../../../Firebase/firebase.init';
import LoginUser from '../LoginUser';
import PropTypes from 'prop-types';
import sweetAlert from '../../../OtherFunction/Sweet Alert/sweetAlert';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';


const RegistrationForm = ({ setUsers, users, handleSignOut }) => {
  const inputFieldData = inputData.signUpData();
  const [eye, setEye] = useState(true);
  const [term, setTerm] = useState(false);
  const [fristName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fristNameError, setfristNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [photoURLError, setPhotoUrlError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleOnChange = async (e) => {
    if (e.target.name == 'FristName') {
      setFristName(e.target.value);
    } else if (e.target.name == 'LastName') {
      setLastName(e.target.value);
    } else if (e.target.name == 'Email') {
      setEmail(e.target.value);
    } else if (e.target.name == 'photoURL') {
      const file = e.target.files[0];
      if (!file) return;
      const datas = new FormData();
      datas.append('file', file);
      datas.append('upload_preset', 'react_image_upload');
      datas.append('Cloud name:', 'ddy6ugeaj');
      const result = await fetch(
        'https://api.cloudinary.com/v1_1/ddy6ugeaj/image/upload',
        {
          method: 'POST',
          body: datas,
        }
      );
      const photoData = await result.json();
      setPhotoURL(photoData.url);
      // console.log(photoData);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (!fristName) {
      setfristNameError('Frist Name Missing');
    } else if (!lastName) {
      setLastNameError('Last Name Missing');
    } else if (!email) {
      setEmailError('Email Missing');
    } else if (!photoURL) {
      setPhotoUrlError('Photo Url is Missing');
    } else if (!password) {
      setPasswordError('Password Missing');
    } else if (!term) {
      // console.log(term);
    } else {
      // passwrod validation
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/;
      if (!passwordRegex.test(password)) {
        sweetAlert(
          'Passwrod Wrong...',
          ' At least one uppercase,one lowercase,one special charecter and one number',
          'error'
        );
        return;
      }
      // email authentication
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed up
          const user = result.user;
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            sweetAlert(
              'SuccesFully Registration!',
              ' Wellcome our New USER',
              'success'
            );
          });
          // update user name and photo Url
          const userNamePhoto = {
            displayName: `${lastName}`,
            photoURL: `${photoURL}`,
          };
          updateProfile(auth.currentUser, userNamePhoto)
            .then(() => {
              setUsers(user);
            })
            .catch((error) => {
              console.error(error.message);
            });
        })

        .catch((error) => {
          const errorMessage = error.message;
          sweetAlert('Oops Wrong...', errorMessage, 'error');
        });
    }
  };

  // console.log(users)
  return (
    <div className=" bg-gray-50 drop-shadow-lg px-[80px] py-15 rounded-2xl">
      {!users ? (
        <div>
          <h1 className="text-blue-600 text-6xl font-extrabold text-center mb-5">
            Registration
          </h1>
          <div className="inputFieldWrapper relative">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              {inputFieldData?.map(({ name, id, isRequred }) => (
                <div key={id} className="flex flex-col gap-y-3">
                  <label htmlFor="">
                    {name}
                    <span className="text-red-500">{isRequred ? '*' : ''}</span>
                  </label>
                  <input
                    className="p-4 drop-shadow-lg border border-black-500 rounded"
                    type={
                      name == 'FristName'
                        ? 'text'
                        : name == 'LastName'
                        ? 'text'
                        : name == 'Email'
                        ? 'email'
                        : name == 'photoURL'
                        ? 'file'
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
                          className="text-2xl cursor-pointer inline-block absolute  bottom-[20%] right-[5%]"
                        >
                          {eye ? <HiEyeSlash /> : <FaEye />}
                        </div>
                      )}
                    </div>
                  )}

                  {!fristName && name == 'FristName' ? (
                    <span className="text-red-400">{fristNameError} </span>
                  ) : !lastName && name == 'LastName' ? (
                    <span className="text-red-400">{lastNameError} </span>
                  ) : !email && name == 'Email' ? (
                    <span className="text-red-400">{emailError} </span>
                  ) : !photoURL && name == 'photoURL' ? (
                    <span className="text-red-400">{photoURLError} </span>
                  ) : !password && name == 'Password' ? (
                    <span className="text-red-400">{passwordError} </span>
                  ) : (
                    ''
                  )}
                </div>
              ))}
              <div>
                <label>
                  <input
                    onClick={() => setTerm(!term)}
                    type="checkbox"
                    name="term"
                  />
                  <span> I accept all Condition</span>
                </label>
              </div>

              {term ? (
                <button
                  onClick={handleSubmit}
                  className="px-7 py-3 cursor-pointer bg-blue-600 text-white  rounded font-bolder text-2xl mt-1 "
                >
                  Register
                </button>
              ) : (
                <button
                  className="px-7 py-3 cursor-pointer text-white bg-blue-200 rounded font-bolder text-2xl mt-1 focus:outline-none"
                  disabled
                >
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <LoginUser handleSignOut={handleSignOut} users={users}></LoginUser>
      )}
    </div>
  );
};
RegistrationForm.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  setUsers: PropTypes.object.isRequired,
};
export default RegistrationForm;
