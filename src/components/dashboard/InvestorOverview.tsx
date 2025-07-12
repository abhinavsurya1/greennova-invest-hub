
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const InvestorOverview = () => {
  const data = [
    { name: "Individual", value: 210, color: "#9b87f5" },
    { name: "Institutional", value: 75, color: "#6E59A5" },
    { name: "Corporate", value: 45, color: "#4CAF50" },
    { name: "Others", value: 17, color: "#FFA726" },
  ];

  // Custom tooltip for the pie chart
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">
            <span className="font-medium">Count: </span>
            {payload[0].value}
          </p>
          <p className="text-sm">
            <span className="font-medium">Percentage: </span>
            {((payload[0].value / 347) * 100).toFixed(1)}%
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investor Demographics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Investors</p>
            <p className="text-2xl font-bold">347</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">New This Month</p>
            <p className="text-2xl font-bold text-greennova-green">+28</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestorOverview;
