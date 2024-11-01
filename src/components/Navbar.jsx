import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-30">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-blue-600">Cantina POS</div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <IoNotifications className="h-6 w-6 text-gray-500" />
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-2">
              <FaUserCircle className="h-8 w-8 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
