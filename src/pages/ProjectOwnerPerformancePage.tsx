
import { Helmet } from "react-helmet";
import ProjectOwnerSidebar from "@/components/dashboard/ProjectOwnerSidebar";
import { LineChart, Wind, Sun, Droplet, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const performanceData = [
  {
    name: "Solar Farm in Rajasthan",
    type: "Solar",
    powerGenerated: 3250, // kWh this month
    target: 3000,
    uptime: 99.2,
    icon: Sun,
  },
  {
    name: "Wind Energy Project in Gujarat",
    type: "Wind",
    powerGenerated: 4210,
    target: 4000,
    uptime: 97.6,
    icon: Wind,
  },
  {
    name: "Hydroelectric Plant in Himachal",
    type: "Hydro",
    powerGenerated: 2380,
    target: 2200,
    uptime: 98.9,
    icon: Droplet,
  }
];

export default function ProjectOwnerPerformancePage() {
  return (
    <>
      <Helmet>
        <title>Performance | GreenNova</title>
        <meta name="description" content="Track the performance of your renewable energy projects." />
      </Helmet>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <ProjectOwnerSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Performance
              </h1>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center relative">
                  <Search className="h-4 w-4 absolute left-3 text-gray-400" />
                  <Input
                    placeholder="Search performance..."
                    className="pl-9 w-64"
                  />
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl font-bold mb-6">Project Performance</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {performanceData.map(({ name, type, powerGenerated, target, uptime, icon: Icon }) => (
                  <Card key={name}>
                    <CardHeader className="flex flex-row items-center gap-3">
                      <Icon className="w-7 h-7 text-greennova-green" />
                      <CardTitle>{name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-2">
                        <span className="text-gray-600 text-sm">Type: </span>
                        <span className="font-semibold">{type}</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-gray-600 text-sm">Power Generated: </span>
                        <span className="font-semibold">{powerGenerated} kWh</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-gray-600 text-sm">Target: </span>
                        <span className="font-semibold">{target} kWh</span>
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm">Uptime: </span>
                        <span className="font-semibold">{uptime}%</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-8">
                <h3 className="font-bold mb-2">Historical Output (Demo)</h3>
                <div className="h-48 flex items-center justify-center text-gray-400">
                  Simple performance chart would go here (connect charts as future enhancement)
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
