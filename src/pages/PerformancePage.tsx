
import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/dashboard/Sidebar";
import { Bell, HelpCircle, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PerformancePage = () => {
  return (
    <>
      <Helmet>
        <title>Performance | GreenNova</title>
        <meta
          name="description"
          content="Track the performance of your renewable energy investments."
        />
      </Helmet>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
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
                    placeholder="Search projects..." 
                    className="pl-9 w-64"
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <HelpCircle className="h-5 w-5" />
                </Button>
                <Avatar>
                  <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                  <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Investment Performance</h2>
                  <Badge variant="outline">Last 30 days</Badge>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Track and analyze the performance of your renewable energy investments over time.
                </p>
                <div className="h-64 flex items-center justify-center border rounded-md mt-6">
                  <p className="text-gray-400">Performance charts will appear here</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default PerformancePage;
