import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdInventory, MdPeople } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    {
      name: "Dashboard",
      path: "/",
      icon: MdDashboard,
    },
    {
      name: "Products",
      path: "/products",
      icon: MdInventory,
    },
    {
      name: "Sales",
      path: "/sales",
      icon: FaShoppingCart,
    },
    {
      name: "Clients",
      path: "/clients",
      icon: MdPeople,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: IoStatsChart,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-white border-r border-gray-200 pt-16">
      <nav className="mt-4 px-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 mb-1 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon
                className={`h-5 w-5 mr-3 ${
                  location.pathname === item.path
                    ? "text-blue-600"
                    : "text-gray-400"
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
