import { Outlet } from 'react-router';
import Sidebar from './Components/HomeComponents/Sidebar';
import { getAuth } from 'firebase/auth';

import { useEffect, useState } from 'react';
import UserNotVerified from './Pages/Error/userNotVerified';

const CommonLayOut = () => {
  const auth = getAuth();
  const [userVerified, setUserVerified] = useState(false);
  useEffect(() => {
    if (auth?.currentUser?.emailVerified) {
      setUserVerified(auth?.currentUser?.emailVerified || true);
    } else {
      setUserVerified(auth?.currentUser?.emailVerified || false);
    }
  }, []);

  let content = null;
  if (userVerified) {
    content = (
      <div className="flex h-screen">
        <div className="sideBar w-[10%]">
          <Sidebar />
        </div>
        <div className="sideContent w-[90%] ">
          <Outlet />
        </div>
      </div>
    );
  } else {
    content = <UserNotVerified />;
  }
  console.log(auth.currentUser);
  return content;
};

export default CommonLayOut;
