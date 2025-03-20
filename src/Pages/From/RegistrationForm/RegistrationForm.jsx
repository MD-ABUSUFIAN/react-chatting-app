import { useState } from 'react';
import registrationBg from '../../../assets/sign-up-concept-illustration_114360-7965.avif';

import Registration from '../RegistrationForm/index';
import { Link } from 'react-router';

const RegistrationForm = () => {
  const [users, setUsers] = useState(null);

  // GoogleAuthentication

  return (
    <div>
      <div className="flex formWrapper justify-betwen items-center">
        <div className="flex flex-col formLeftWrapper justify-center w-1/2 hv-screen items-center">
          <div className="p-6 rounded drop-shadow-lg">
            <Registration setUsers={setUsers} users={users} />
          </div>

          <span className="text-lg font-medium ">
            Already Register? plz <Link to="/login" className="text-blue-500 text-xl cursor-pointer font-bolder">Login</Link>
           
          </span>
        </div>

        <div className="formRightWrapper w-1/2 ">
          <img className="w-full h-dvh " src={registrationBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
