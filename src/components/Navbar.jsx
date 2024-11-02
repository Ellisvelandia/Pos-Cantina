import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              className="p-2 rounded-lg lg:hidden text-gray-600 hover:bg-gray-100"
              onClick={onMenuClick}
            >
              <MdMenu className="h-6 w-6" />
            </button>

            <div className="font-bold text-lg lg:text-xl text-blue-600 ml-2">
              Cantina POS
            </div>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Notifications */}
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <IoNotifications className="h-5 w-5 lg:h-6 lg:w-6 text-gray-500" />
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-2">
              <FaUserCircle className="h-7 w-7 lg:h-8 lg:w-8 text-gray-400" />
              <span className="hidden lg:inline text-sm font-medium text-gray-700">
                Admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
