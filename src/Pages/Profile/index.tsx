
import { useSelector, useDispatch } from 'react-redux';
import { UsetInfo, setUserInfo } from '../../Store/user-slice';

import { UserInitial } from '../../Store/user-initial';
import { useNavigate } from 'react-router-dom';
import type { IUser } from '../../Store/user-type';
import MyTrips from './MyTrips';

const ProfilePage = () => {
  const userInfo: IUser = useSelector(UsetInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserInfo(UserInitial));
    navigate('/Login');

  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="bg-white shadow-sm rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">User Profile</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-sm font-medium text-gray-500">First Name</p>
              <p className="text-lg text-gray-900 font-semibold">{userInfo.first_name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Last Name</p>
              <p className="text-lg text-gray-900 font-semibold">{userInfo.last_name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="text-lg text-gray-900 font-semibold">{userInfo.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
            style={{ backgroundColor: '#2093EF' }}
          >
            Logout
          </button>
        </div>

        {/* My Trips Section */}
        <div className="bg-white shadow-sm rounded-lg p-8">
          <MyTrips />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
