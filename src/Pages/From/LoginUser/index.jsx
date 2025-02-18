import userPhoto from '../../../assets/userPhoto.png';
import PropTypes from 'prop-types';

const LoginUser = ({ handleSignOut, users }) => {
  return (
    <div className="flex flex-col items-center bg-gray-50  rounded ">
      <div className="flex flex-col gap-y-4 p-5 ">
        <img
          className="h-[150px] w-[150px] mx-auto rounded-full"
          src={users.photoURL || userPhoto}
          alt=""
        />
        <h1 className="text-3xl text-center  font-bold">
          {users?.displayName}
        </h1>
        <p className="font-bold text-center text-blue-600">{users?.email}</p>
      </div>
      <button
        onClick={handleSignOut}
        className="px-8 py-3 cursor-pointer bg-red-600  text-white rounded font-extrabold text-2xl"
      >
        LogOut
      </button>
    </div>
  );
};
LoginUser.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};
export default LoginUser;
