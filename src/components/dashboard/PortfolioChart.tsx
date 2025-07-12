
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const monthlyData = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 1398 },
  { name: "Mar", value: 9800 },
  { name: "Apr", value: 3908 },
  { name: "May", value: 4800 },
  { name: "Jun", value: 3800 },
  { name: "Jul", value: 4300 },
  { name: "Aug", value: 5300 },
  { name: "Sep", value: 4800 },
  { name: "Oct", value: 6800 },
  { name: "Nov", value: 7800 },
  { name: "Dec", value: 9800 },
];

const distributionData = [
  { name: "Solar", value: 45 },
  { name: "Wind", value: 30 },
  { name: "Hydro", value: 15 },
  { name: "Biomass", value: 10 },
];

const COLORS = ["#9b87f5", "#1EAEDB", "#4CAF50", "#F97316"];

const PortfolioChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Portfolio Growth</CardTitle>
          <CardDescription>Your investment performance over time</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
                formatter={(value) => [`$${value}`, "Value"]}
              />
              <Bar
                dataKey="value"
                fill="#9b87f5"
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Investment Distribution</CardTitle>
          <CardDescription>By energy type</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={distributionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {distributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip 
                formatter={(value) => [`${value}%`]}
                contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioChart;
