import { useSelector } from "react-redux";

import { UsetInfo } from "../Store/user-slice";
import type { IUser } from "../Store/user-type";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const userInfo: IUser = useSelector(UsetInfo);
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyan-400 rounded"></div>
              <span className="text-xl font-semibold text-gray-900">
                EaseMyTrip
              </span>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            {userInfo.first_name.length > 0 ? (
              <Link to="/profile">
                <div className="w-8 h-8 flex items-center justify-center bg-cyan-400 rounded-full">
                  {userInfo.first_name.split("")[0].toUpperCase()}
                </div>
              </Link>
            ) : (
              <button
                onClick={() => {
                  navigate("/Login");
                }}
                className=" border font-semibold cursor-pointer border-cyan-500 min-w-1/2 py-2 px-5 rounded-md bg-cyan-100 transition-all hover:bg-cyan-200"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
