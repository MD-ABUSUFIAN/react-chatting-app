import { useState } from 'react';
import { inputData } from '../../../lib/lib';
import { FaEye } from 'react-icons/fa';
import { HiEyeSlash } from 'react-icons/hi2';

const RegistrationForm = () => {
  const inputFieldData = inputData.signUpData();
  const [eye, setEye] = useState(true);
  const [fristName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fristNameError, setfristNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleOnChange = (e) => {
    if (e.target.name == 'FristName') {
      setFristName(e.target.value);
    } else if (e.target.name == 'LastName') {
      setLastName(e.target.value);
    } else if (e.target.name == 'Email') {
      setEmail(e.target.value);
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
      alert('email missing');
    } else if (!password) {
      setPasswordError('Password Missing');
    } else {
      alert('submit succesfully');
    }
  };

  return (
    <div className="bg-gray-50 px-[80px] py-10 rounded-2xl">
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
                    : name == 'Password' && eye
                    ? 'password'
                    : 'text'
                }
                name={name}
                id={name}
                placeholder={`plz type ${name}`}
                onChange={handleOnChange}
              />
              {name == 'Password' && (<div>
                
                    { password &&<div onClick={() => setEye(!eye)}
                    className="text-2xl cursor-pointer inline-block absolute  bottom-[18%] right-[5%]">
                        {
                            eye ? <HiEyeSlash /> :<FaEye/>
                        }
                    </div> }
                
                
              </div>)}

              {!fristName && name == 'FristName' ? (
                <span className="text-red-400">{fristNameError} </span>
              ) : !lastName && name == 'LastName' ? (
                <span className="text-red-400">{lastNameError} </span>
              ) : !email && name == 'Email' ? (
                <span className="text-red-400">{emailError} </span>
              ) : !password && name == 'Password' ? (
                <span className="text-red-400">{passwordError} </span>
              ) : (
                ''
              )}
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="px-7 py-3 cursor-pointer bg-yellow-500 text-white rounded font-bolder text-2xl mt-2"
          >
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
