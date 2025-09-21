import { useSelector } from "react-redux";

import { UsetInfo } from "../Store/user-slice";
import type { IUser } from "../Store/user-type";
import { Link } from "react-router-dom";


const Header = () => {
  const userInfo: IUser = useSelector(UsetInfo);
  return <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
               <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyan-400 rounded"></div>
              <span className="text-xl font-semibold text-gray-900">EaseMyTrip</span>
            </div>
            </Link>
            {/* <nav className="hidden md:flex space-x-8">
                <Link to="/Itinerary" className="text-gray-700 hover:text-gray-900 font-medium"> Ai Itinerary</Link> 
            </nav> */}
            <div className="flex items-center space-x-4">
             {userInfo.name.slice(0,2).toLocaleUpperCase()}
            </div>
          </div>
        </div>

  </header>
};
export default Header;
