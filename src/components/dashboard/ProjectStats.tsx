
import {
  CircleDollarSign,
  TrendingUp,
  Users,
  LineChart,
} from "lucide-react";

const ProjectStats = () => {
  const stats = [
    {
      title: "Total Funding",
      value: "₹85,24,300",
      change: "+14%",
      icon: <CircleDollarSign className="h-5 w-5 text-greennova-green" />,
      trend: "up",
    },
    {
      title: "Active Projects",
      value: "5",
      change: "+1",
      icon: <LineChart className="h-5 w-5 text-greennova-purple" />,
      trend: "up",
    },
    {
      title: "Total Investors",
      value: "347",
      change: "+28",
      icon: <Users className="h-5 w-5 text-blue-500" />,
      trend: "up",
    },
    {
      title: "ROI",
      value: "12.4%",
      change: "+0.8%",
      icon: <TrendingUp className="h-5 w-5 text-yellow-500" />,
      trend: "up",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 p-5"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-gray-50 dark:bg-gray-900 p-3">
              {stat.icon}
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  {stat.title}
                </dt>
                <dd>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <div className="mt-4">
            <div
              className={`text-sm ${
                stat.trend === "up"
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              } flex items-center`}
            >
              {stat.change}
              <span className="ml-1">from last month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;
