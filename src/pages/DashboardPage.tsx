
import { Helmet } from "react-helmet";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardStats from "@/components/dashboard/DashboardStats";
import PortfolioChart from "@/components/dashboard/PortfolioChart";
import RecentInvestments from "@/components/dashboard/RecentInvestments";
import ImpactMetrics from "@/components/dashboard/ImpactMetrics";
import ProjectRecommendations from "@/components/dashboard/ProjectRecommendations";
import TokenBalances from "@/components/dashboard/TokenBalances";
import { Bell, HelpCircle, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | GreenNova</title>
        <meta
          name="description"
          content="View your GreenNova investment dashboard, track performance, and monitor impact."
        />
      </Helmet>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Dashboard
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
            <div className="max-w-7xl mx-auto space-y-6">
              <DashboardStats />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <PortfolioChart />
                </div>
                <div>
                  <TokenBalances />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentInvestments />
                <ImpactMetrics />
              </div>
              <ProjectRecommendations />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
