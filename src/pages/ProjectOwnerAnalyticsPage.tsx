
import { Helmet } from "react-helmet";
import ProjectOwnerSidebar from "@/components/dashboard/ProjectOwnerSidebar";
import { ArrowUpRight, PieChart, BarChart, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const analytics = [
  {
    title: "Total Investments",
    value: "₹2,540,000",
    change: "+13%",
    icon: PieChart,
  },
  {
    title: "Active Investors",
    value: "201",
    change: "+8%",
    icon: Users,
  },
  {
    title: "Average Funding Progress",
    value: "62%",
    change: "+4%",
    icon: BarChart,
  },
];

const dataByType = [
  { type: "Solar", count: 120, color: "#FBBF24" },
  { type: "Wind", count: 65, color: "#60A5FA" },
  { type: "Hydro", count: 35, color: "#38BDF8" },
];

export default function ProjectOwnerAnalyticsPage() {
  return (
    <>
      <Helmet>
        <title>Analytics | GreenNova</title>
        <meta name="description" content="Analytics for your renewable energy projects on GreenNova." />
      </Helmet>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <ProjectOwnerSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Analytics
              </h1>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center relative">
                  <Search className="h-4 w-4 absolute left-3 text-gray-400" />
                  <Input
                    placeholder="Search analytics..."
                    className="pl-9 w-64"
                  />
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl font-bold mb-6">Key Analytics</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {analytics.map(({ title, value, change, icon: Icon }) => (
                  <Card key={title}>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>{title}</CardTitle>
                      <Icon className="w-7 h-7 text-greennova-green" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{value}</div>
                      <div className={`text-sm mt-1 ${change.includes('+') ? 'text-green-600' : 'text-red-500'}`}>
                        {change} this quarter
                        <ArrowUpRight className="inline w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="font-semibold mb-2">Investments By Project Type</h3>
                {/* Simple chart visual using divs */}
                <div className="flex gap-6 mt-6">
                  {dataByType.map(({ type, count, color }) => (
                    <div key={type} className="flex flex-col items-center flex-1">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2" style={{ background: color, color: '#fff', fontWeight: 'bold', fontSize: '1.5rem' }}>
                        {count}
                      </div>
                      <span className="font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
