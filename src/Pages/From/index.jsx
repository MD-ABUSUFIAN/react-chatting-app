import LoginForm from './LoginForm';
import loginBg from '../../assets/loginBg.avif';
import registrationBg from '../../assets/sign-up-concept-illustration_114360-7965.avif';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const Form = () => {
  const [condition, setCondition] = useState(false);
  return (
    <div>
      <div className="formWrapper flex items-center justify-betwen">
        <div className=' formLeftWrapper flex flex-col items-center justify-center w-1/2 h-screen'>
         
        <div className=' p-16 rounded drop-shadow-lg'>
            
           {condition ? <LoginForm /> : <RegistrationForm />}
        </div>
         
            <div className='mt-5'>

                <span className='text-xl'>Already Register? {
                    !condition?<button
                    className=" text-blue-500 text-xl font-bolder cursor-pointer"
                    onClick={() => setCondition(true)}
                  >Login</button>:                    <button
                  className=" text-blue-500 text-xl font-bolder cursor-pointer "
                  onClick={() => setCondition(false)}
                >
                  Register
                </button>} or New User? 
                 </span>
              
              
              
            </div>
        
        </div>
        <div className="formRightWrapper w-1/2 h-screen ">
          {condition ? (
            <img className="w-full h-screen" src={loginBg} alt="" />
          ) : (
            <img className="w-full h-screen" src={registrationBg} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
