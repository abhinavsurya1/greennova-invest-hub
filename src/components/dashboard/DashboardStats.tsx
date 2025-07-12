
import {
  BarChart,
  Wallet,
  TrendingUp,
  Leaf,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Total Invested",
    value: "$8,450",
    change: "+12.5%",
    isPositive: true,
    icon: <Wallet className="h-6 w-6 text-greennova-purple" />,
  },
  {
    title: "Portfolio Value",
    value: "$9,320",
    change: "+8.2%",
    isPositive: true,
    icon: <BarChart className="h-6 w-6 text-greennova-blue" />,
  },
  {
    title: "Annual Return",
    value: "10.4%",
    change: "-1.2%",
    isPositive: false,
    icon: <TrendingUp className="h-6 w-6 text-greennova-green" />,
  },
  {
    title: "CO₂ Offset",
    value: "2.3 tons",
    change: "+0.4 tons",
    isPositive: true,
    icon: <Leaf className="h-6 w-6 text-greennova-green" />,
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="p-2 bg-greennova-soft-blue dark:bg-gray-800 rounded-lg">
                {stat.icon}
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div
                className={`flex items-center ${
                  stat.isPositive
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {stat.isPositive ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                <span>{stat.change}</span>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                from last month
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
