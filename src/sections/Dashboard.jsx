import { FaMoneyBillWave, FaBoxes, FaUsers } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "$12,345",
      icon: FaMoneyBillWave,
      color: "text-green-600 bg-green-50",
    },
    {
      title: "Products",
      value: "150",
      icon: FaBoxes,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Clients",
      value: "64",
      icon: FaUsers,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Revenue",
      value: "+25%",
      icon: BsGraphUp,
      color: "text-yellow-600 bg-yellow-50",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            >
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
};

export default Dashboard;
