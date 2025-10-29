
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UsetInfo, setUserInfo } from '../../Store/user-slice';

import { UserInitial } from '../../Store/user-initial';
import { useNavigate } from 'react-router-dom';
import type { IUser } from '../../Store/user-type';

const ProfilePage = () => {
  const userInfo: IUser = useSelector(UsetInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserInfo(UserInitial));
    navigate('/Login');

  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">User Profile</h1>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-500">First Name</p>
            <p className="text-lg text-gray-900">{userInfo.first_name}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Last Name</p>
            <p className="text-lg text-gray-900">{userInfo.last_name}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-lg text-gray-900">{userInfo.email}</p>
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
